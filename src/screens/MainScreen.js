import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
export const MainScreen = ({ removeTodo, todos, addTodo, openTodo }) => {
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo onRemove={removeTodo} onOpen={openTodo} todo={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrap}>
                <Image
          resizeMode="contain"
          source={require("../../assets/noItems.png")}
          style={styles.image}
        />

      </View>
    );
  }
  return (
    <View>
      <AddTodo addSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
