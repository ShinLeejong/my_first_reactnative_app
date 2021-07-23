import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from "./components/header";
import TodoLists from './components/todoLists';

export default function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      text: "Hey!",
      key: '1'
    }
  ]);

  const onTouchablePress = (key: string): void => setTodos(() => todos.filter(ele => ele.key !== key));
  const onAddPress = (text: string): void => setTodos((prev) => [
    {
      text,
      key: (prev.length + 1).toString(),
    },
    ...prev
  ]);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo pressHandler={onAddPress} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}): JSX.Element => (
                <TodoLists item={item} pressHandler={onTouchablePress}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
});
