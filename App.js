import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestList from "./app/RestList";
import Tray from "./app/Tray";

export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState(null);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}> Lunch Spot 🌮</Text>
        <RestList selectRestaurant={selectRestaurant} />
        <StatusBar style="auto" />
      </View>
      <Tray setSelectRestaurant={setSelectRestaurant} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: "#d3c8c3",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    color: "#000000",
    fontSize: 36,
    fontWeight: 600,
  },
});
