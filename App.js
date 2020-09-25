import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { Navbar } from "./src/components/Navbar";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState("1");
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React Native" },
    { id: "2", title: "Write app" },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
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
