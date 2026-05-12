import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";

import { Note } from "../types/note";

interface NoteCardProps {
  note: Note;
  isDark: boolean;
}

export default function NoteCard({
  note,
  isDark,
}: NoteCardProps) {
  const { width } = useWindowDimensions();

  const isTablet = width > 768;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#F5F5F5",
          opacity: pressed ? 0.8 : 1,
          width: isTablet ? "48%" : "100%",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        {note.title}
      </Text>

      <Text
        numberOfLines={2}
        style={[
          styles.content,
          {
            color: isDark ? "#BBBBBB" : "#555555",
          },
        ]}
      >
        {note.content}
      </Text>

      <Text
        style={[
          styles.date,
          {
            color: isDark ? "#888888" : "#777777",
          },
        ]}
      >
        {note.date}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },

  content: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },

  date: {
    fontSize: 13,
  },
});