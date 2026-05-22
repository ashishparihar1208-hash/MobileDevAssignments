import { Tabs, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/app/context/CartContext";
import { COLORS } from "@/app/constants/colors";

export default function TabsLayout() {
  const segments = useSegments();
  const { cart } = useCart();

  const hideTabBar =
    segments.join("/").includes("restaurant") ||
    segments.join("/").includes("cart")

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: hideTabBar ? { display: "none" } : undefined,
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
  name="orders"
  options={{
    title: "Orders",
    tabBarBadge: cart.length > 0 ? cart.length : undefined,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="receipt-outline" size={size} color={color} />
    ),
  }}
/>

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}