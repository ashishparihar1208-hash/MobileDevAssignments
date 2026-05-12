import React from "react";

import {
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

interface ThemeToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  isDark: boolean;
}

export default function ThemeToggle({
  isEnabled,
  onToggle,
  isDark,
}: ThemeToggleProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        Dark Mode
      </Text>

      <Switch
        value={isEnabled}
        onValueChange={onToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});