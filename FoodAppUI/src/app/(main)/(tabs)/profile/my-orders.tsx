import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCart } from "@/app/context/CartContext";
import { COLORS } from "@/app/constants/colors";

export default function MyOrdersScreen() {
  const { cart } = useCart();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <ScrollView
        contentContainerStyle={{
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
          My Orders
        </Text>

        {cart.length === 0 ? (
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: 25,
              borderRadius: 18,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLORS.gray,
              }}
            >
              No orders yet
            </Text>
          </View>
        ) : (
          cart.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: COLORS.white,
                padding: 20,
                borderRadius: 18,
                marginBottom: 16,

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.08,
                shadowRadius: 3,

                elevation: 3,
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
                {item.name}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "600",
                }}
              >
                ₹{item.price}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}