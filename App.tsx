import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Lee');

  return (
    <View style={styles.container}>
      <Text>Hi there! my name is {name}.</Text>
      <StatusBar style="auto" />
      <View>
        <Button title='update Name' color="red" onPress={() => setName('Leejong')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
