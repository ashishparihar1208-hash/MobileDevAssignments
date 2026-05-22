import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import { restaurants } from "@/app/constants/restaurants";
import { COLORS } from "@/app/constants/colors";

export default function HomeScreen() {
  function openRestaurant(restaurant: {
    id: string;
    name: string;
    price: number;
  }) {
    router.push({
      pathname: "/(main)/(tabs)/home/restaurant/[id]",
      params: {
        id: restaurant.id,
        name: restaurant.name,
        price: restaurant.price.toString(),
      },
    });
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 25,
            color: COLORS.text,
          }}
        >
          Restaurants
        </Text>

        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            onPress={() => openRestaurant(restaurant)}
            activeOpacity={0.8}
            style={{
              backgroundColor: COLORS.white,
              padding: 20,
              borderRadius: 18,
              marginBottom: 18,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4,

              elevation: 4,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 8,
                color: COLORS.text,
              }}
            >
              {restaurant.name}
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: COLORS.gray,
              }}
            >
              Starting from ₹{restaurant.price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}