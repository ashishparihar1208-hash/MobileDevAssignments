import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";

import { useCart } from "@/app/context/CartContext";
import { COLORS } from "@/app/constants/colors";

export default function RestaurantDetailScreen() {
  const { id, name, price } = useLocalSearchParams();

  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({
      id: id as string,
      name: name as string,
      price: Number(price),
    });

    router.push("/(main)/(tabs)/home/cart");
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
          flex: 1,
          justifyContent: "center",
          padding: 25,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 24,
            padding: 30,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 20,
              color: COLORS.text,
            }}
          >
            {name || "Unknown Restaurant"}
          </Text>

          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              color: COLORS.gray,
            }}
          >
            Restaurant ID: {id}
          </Text>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 35,
              color: COLORS.primary,
            }}
          >
            ₹{price || "N/A"}
          </Text>

          <TouchableOpacity
            onPress={handleAddToCart}
            activeOpacity={0.8}
            style={{
              backgroundColor: COLORS.primary,
              padding: 18,
              borderRadius: 14,
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.8}
            style={{
              backgroundColor: "#ddd",
              padding: 18,
              borderRadius: 14,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}