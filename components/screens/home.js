import React from "react";
import { Button, Text, View } from "react-native";
// import { Text, View } from "react-native-web";
import { SearchBar } from "@rneui/themed";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home page</Text>
      <SearchBar />
    </View>
  );
};

export default Home;
