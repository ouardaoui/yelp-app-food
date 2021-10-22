import React from "react"
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Searchbare = ({ term, onTermChange, onTermsubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome style={styles.iconsstyle} name="search" color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        style={styles.inputstyle}
        placeholder="search"
        onEndEditing={onTermsubmit}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  inputstyle: {
    flex: 1,
    fontSize: 18
  },
  iconsstyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 35
  }
})
export default Searchbare;