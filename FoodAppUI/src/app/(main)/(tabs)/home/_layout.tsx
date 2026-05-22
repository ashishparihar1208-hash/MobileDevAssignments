import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffda47ed",
        },

        headerTintColor: "black",

        headerBackTitle: "Back",

        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Restaurants",
        }}
      />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          title: "Restaurant Detail",
        }}
      />

      <Stack.Screen
        name="cart"
        options={{
          title: "Cart",
        }}
      />
    </Stack>
  );
}