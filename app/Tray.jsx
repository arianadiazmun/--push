import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Tray({ setSelectRestaurant }) {
  const choose = () => {
    const chosen = Math.random();
    setSelectRestaurant(chosen);
  };

  return (
    <View style={styles.tray}>
      <TouchableOpacity onPress={choose} style={styles.button}>
        <Text style={styles.buttonText}>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b0c4de",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: 800,
  },

  tray: {
    width: "100%",
    backgroundColor: "#e9eeff",
    height: 70,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
