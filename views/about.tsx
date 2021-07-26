import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../components/styles/global";

export default (): JSX.Element => {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
