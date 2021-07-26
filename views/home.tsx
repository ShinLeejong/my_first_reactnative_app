import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../components/styles/global";

export default ({ navigation }: any): JSX.Element => {
  const pressHandler = (): void => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Text style={globalStyles.p}>This is a paragraph</Text>
      <Button title="go to review details" onPress={() => pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
