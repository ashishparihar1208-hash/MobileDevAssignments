import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import NotesListScreen from "../screens/NotesListScreen";
import NoteEditorScreen from "@/screens/noteEditorScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <NotesListScreen />
    </SafeAreaView>
  );
}