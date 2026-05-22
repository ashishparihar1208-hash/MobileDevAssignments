import { Stack, router, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "@/app/context/AuthContext";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { CartProvider } from "@/app/context/CartContext";

function InitialLayout() {
  const { isAuthenticated, loading,hasSeenOnboarding } = useAuth();
  const segments = useSegments();

  useEffect(() => {
  if (loading) return;

  const segment = segments[0];

  // User has NOT seen onboarding
  if (!hasSeenOnboarding) {
    router.replace("/(auth)/onboarding");
    return;
  }

  // User not logged in
  if (!isAuthenticated && segment !== "(auth)") {
    router.replace("/(auth)/login");
  }

  // User logged in
  if (isAuthenticated && segment !== "(main)") {
    router.replace("/(main)/(tabs)/home");
  }
}, [isAuthenticated, loading, segments, hasSeenOnboarding]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
  <CartProvider>
    <InitialLayout />
  </CartProvider>
</AuthProvider>
  );
}