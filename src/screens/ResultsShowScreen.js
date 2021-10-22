import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import yelp from "../api/yelp";


const ResultsShowScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [results, setResults] = useState(null)
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])
  if (!results) {
    return null
  }
  return (
    <View>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{ uri: item }} />
          )
        }}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
  }
});
export default ResultsShowScreen;