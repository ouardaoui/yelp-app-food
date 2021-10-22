import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Searchbare from "../components/Searchbare";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();
  const filterResultsPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })


  }

  return (
    <View style={styles.container}>
      <Searchbare
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermsubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsPrice("$")} title="Cost effective" />
        <ResultsList results={filterResultsPrice("$$")} title="Bit pricer" />
        <ResultsList results={filterResultsPrice(undefined)} title="Big spender" />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1
  }
});

export default SearchScreen;