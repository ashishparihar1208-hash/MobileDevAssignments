import { View, Text, Button } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const { completeOnboarding } = useAuth();

  async function handleStart() {
    await completeOnboarding();

    router.replace("/(auth)/login");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Food Delivery App
      </Text>

      <Text>Order your favorite meals easily</Text>

      <Button title="Get Started" onPress={handleStart} />
    </View>
  );
}