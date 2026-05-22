import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { restaurants } from "@/app/constants/restaurants";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );

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
        Search Restaurants
      </Text>

      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      {filteredRestaurants.map((restaurant) => (
        <View
          key={restaurant.id}
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 12,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {restaurant.name}
          </Text>

          <Text>₹{restaurant.price}</Text>
        </View>
      ))}
    </View>
  );
}