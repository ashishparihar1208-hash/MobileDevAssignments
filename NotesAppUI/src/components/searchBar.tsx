import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  isDark: boolean;
}

export default function SearchBar({
  value,
  onChangeText,
  isDark,
}: SearchBarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#F1F1F1",
        },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search notes..."
        placeholderTextColor={
          isDark ? "#888888" : "#999999"
        }
        style={[
          styles.input,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  input: {
    height: 52,
    fontSize: 16,
  },
});