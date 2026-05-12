import React, { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  ImageBackground,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

export default function NoteEditorScreen() {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const { width } = useWindowDimensions();

  const isTablet = width > 768;

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? "#121212"
            : "#FFFFFF",
        },
      ]}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
          }}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>
                Back
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text style={styles.buttonText}>
                Save
              </Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View
          style={[
            styles.editorContainer,
            {
              paddingHorizontal: isTablet
                ? 60
                : 20,
            },
          ]}
        >
          <TextInput
            placeholder="Note Title"
            placeholderTextColor={
              isDark ? "#888888" : "#999999"
            }
            value={title}
            onChangeText={setTitle}
            style={[
              styles.titleInput,
              {
                color: isDark
                  ? "#FFFFFF"
                  : "#000000",
                borderBottomColor: isDark
                  ? "#333333"
                  : "#DDDDDD",
              },
            ]}
          />

          <TextInput
            placeholder="Start writing..."
            placeholderTextColor={
              isDark ? "#888888" : "#999999"
            }
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
            style={[
              styles.contentInput,
              {
                color: isDark
                  ? "#FFFFFF"
                  : "#000000",
              },
            ]}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 220,
    justifyContent: "flex-start",
  },

  headerImage: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerOverlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  actionButton: {
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  editorContainer: {
    paddingTop: 28,
    paddingBottom: 60,
  },

  titleInput: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 24,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },

  contentInput: {
    fontSize: 18,
    lineHeight: 30,
    minHeight: 400,
  },
});