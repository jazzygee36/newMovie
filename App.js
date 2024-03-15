import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/home";
import About from "./components/screens/about";
// import { store } from './app/store'
// import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    // <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ title: "Welcome" }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};
export default MyStack;
