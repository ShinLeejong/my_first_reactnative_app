import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Lee');
  const [age, setAge] = useState(27);

  return (
    <View style={styles.container}>
      <Text>Hi there! my name is {name}.</Text>
      <Text>I'm {age} years old.</Text>
      <Text>What's your name?</Text>
        <TextInput 
          style={styles.input} 
          placeholder="What's your name?" 
          onChangeText={(name) => setName(name.toString())}
        />
      <Text>How old are you?</Text>
        <TextInput 
          style={styles.input} 
          placeholder="How old are you?" 
          onChangeText={(age) => setAge(+age)}
        />
      <Text>Diary</Text>
        <TextInput
          style={styles.input}
          multiline
          keyboardType='numeric'
        />
      <StatusBar style="auto" />
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
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 6,
    margin: 8,
    width: 200
  }
});
