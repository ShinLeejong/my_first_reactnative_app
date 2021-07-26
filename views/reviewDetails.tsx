import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../components/styles/global";

export default ({ navigation }: any): JSX.Element => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>review Detail Screen</Text>
      <Button title="돌아가기" onPress={() => pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
