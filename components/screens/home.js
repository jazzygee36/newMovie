import React from "react";
import { Button, Text, View } from "react-native";
// import { Text, View } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home page</Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("About", { name: "Jane" })}
      />
    </View>
  );
};

export default Home;
