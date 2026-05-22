import { View, Text, Button } from "react-native";
import { useCart } from "@/app/context/CartContext";

export default function CartScreen() {
  const { cart, clearCart } = useCart();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Cart
      </Text>

      {cart.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 15,
            backgroundColor: "#eee",
            borderRadius: 10,
          }}
        >
          <Text>{item.name}</Text>

          <Text> ₹{item.price}</Text>
        </View>
      ))}

      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
}