import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import RestaurantDetail from "./RestaurantDetails";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { navigation.navigate("ResultsShowScreen", { id: item.id }) }}>
              <RestaurantDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 17.5,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 5,
  }
})
export default ResultsList;