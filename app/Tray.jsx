import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Tray({ setSelectRestaurant }) {
  const choose = () => {
    const chosen = Math.random();
    setSelectRestaurant(chosen);
  };

  const clear = () => {
    setSelectRestaurant(0);
  };

  return (
    <View style={styles.tray}>
      <View style={styles.buttonList}>
        <TouchableOpacity onPress={choose} style={styles.button}>
          <Text style={styles.buttonText}>🔀 Shuffle</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={clear} style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonList: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    backgroundColor: "#fbcaaf",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 15,

    //borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
  },

  resetButton: {
    backgroundColor: "#010101",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 15,
    //borderStyle: 'solid',
    //borderWidth: 1,
    //borderColor: 'black'
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
  },

  tray: {
    width: "100%",
    backgroundColor: "#f3f5f6",
    height: 90,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 12,
  },
});
