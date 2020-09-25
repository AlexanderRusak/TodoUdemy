import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";

export const AddTodo = ({ addSubmit }) => {
  const [title, setTitle] = useState("");
  const pressHandler = () => {
    if (title.trim()) {
      addSubmit(title);
      setTitle("");
    } else {
      Alert.alert("Set value");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
        placeholder="Set value"
        style={styles.input}
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Button onPress={pressHandler} title="ADD" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    borderStyle: "solid",
  },
});
