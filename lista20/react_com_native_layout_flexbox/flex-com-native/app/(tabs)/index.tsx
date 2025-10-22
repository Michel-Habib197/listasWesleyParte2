import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,                // se sua versão não suportar, remova e use margin nos boxes
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});