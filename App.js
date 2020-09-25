import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { MainScreen } from "./src/screens/MainScreen";
import { Navbar } from "./src/components/Navbar";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'roboto-bold': require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };
  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Delete element",
      `Are you sure, that you want to delete the ${todo.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };
  let content = (
    <MainScreen
      todos={todos}
      openTodo={(id) => setTodoId(id)}
      addTodo={addTodo}
      removeTodo={removeTodo}
    />
  );

  if (todoId) {
    const selecteTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        todo={selecteTodo}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo app!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
