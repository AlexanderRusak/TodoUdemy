import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
export const MainScreen = ({ removeTodo, todos, addTodo, openTodo }) => {
  return (
    <View>
      <AddTodo addSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo onRemove={removeTodo} onOpen={openTodo} todo={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
