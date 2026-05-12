import React, { useMemo, useState } from "react";
import {
  darkColors,
  lightColors,
} from "../constants/colors";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useColorScheme,
} from "react-native";

import SearchBar from "../components/searchBar";
import ThemeToggle from "../components/themeToggle";
import NoteCard from "../components/NoteCard"

import { Note } from "../types/note";

export default function NotesListScreen() {
  const systemTheme = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(
    systemTheme === "dark"
  );

  const colors = isDarkMode
  ? darkColors
  : lightColors;

  const [searchQuery, setSearchQuery] = useState("");

  const notes: Note[] = [
    {
      id: "1",
      title: "Meeting Notes",
      content: "Discuss project deadlines and UI improvements.",
      date: "May 12",
    },
    {
      id: "2",
      title: "Shopping List",
      content: "Milk, Bread, Coffee, Eggs",
      date: "May 11",
    },
    {
      id: "3",
      title: "Ideas",
      content: "Build a modern notes app with dark mode support.",
      date: "May 10",
    },
    {
      id: "4",
      title: "Workout Plan",
      content: "Push day, Pull day, Legs, Cardio.",
      date: "May 9",
    },
  ];

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const searchText = searchQuery.toLowerCase();

      return (
        note.title.toLowerCase().includes(searchText) ||
        note.content.toLowerCase().includes(searchText)
      );
    });
  }, [searchQuery]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background
        }
      ]}
    >
      <Text
        style={[
          styles.heading,
          {
            color: colors.text
          },
        ]}
      >
        My Notes
      </Text>

      <ThemeToggle
        isEnabled={isDarkMode}
        onToggle={() =>
          setIsDarkMode((previous) => !previous)
        }
        isDark={isDarkMode}
      />

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        isDark={isDarkMode}
      />

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            isDark={isDarkMode}
          />
        )}
        ListEmptyComponent={
  <Text
    style={[
      styles.emptyText,
      {
        color: colors.secondaryText,
      },
    ]}
  >
    No notes found.
  </Text>
}
      />
    </View>
  );
}

const baseHeadingStyle = {
  fontSize: 32,
  fontWeight: "700" as const,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  heading: StyleSheet.compose(
    baseHeadingStyle,
    {
      marginBottom: 20,
    }
  ),

  listContent: {
    paddingBottom: 30,
  },

  emptyText: {
  textAlign: "center",
  marginTop: 40,
  fontSize: 16,
},

});