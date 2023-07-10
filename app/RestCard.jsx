import { View, Image, Text, StyleSheet } from "react-native";

export default function RestCard({ restaurant }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.photo_url,
          cache: "force-cache",
        }}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      {
        (restaurant.rating.length > 0)
        ? <Text style={styles.rating}>{"⭐️".repeat(restaurant.rating[0])}</Text>
        : null
      }
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  card: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#e9eeff",
    borderRadius: 12,
    backgroundColor: "#e9eeff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 12,
  },

  title: {
    color: "#203040",
    fontSize: 27,
    textAlign: "center",
  },
  rating: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 9,
  },

});
