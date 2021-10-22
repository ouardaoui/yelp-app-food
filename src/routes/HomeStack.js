import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "../screens/SearchScreen";
import ResultsShowScreen from "../screens/ResultsShowScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Search Screen',

        }}
      />
      <Stack.Screen
        name="ResultsShowScreen"
        component={ResultsShowScreen}
        options={{
          title: 'Results show',

        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;