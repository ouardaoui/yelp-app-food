import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 5
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 5
  },
  name: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default RestaurantDetail;