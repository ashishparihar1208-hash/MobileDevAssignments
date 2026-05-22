import { View, Text } from "react-native";
import { useCart } from "@/app/context/CartContext";

export default function OrdersScreen() {
  const { cart } = useCart();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Your Orders
      </Text>

      {cart.length === 0 ? (
        <Text>No orders yet</Text>
      ) : (
        cart.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>

            <Text>₹{item.price}</Text>
          </View>
        ))
      )}
    </View>
  );
}