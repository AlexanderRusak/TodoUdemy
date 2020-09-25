import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    title.trim().length < 3
      ? Alert.alert(
          "Error",
          `Minimum length of title should be more than 3 characters. Now ${
            title.trim().length
          }`
        )
      : onSave(title);
  };
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Edit title name"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle} ///(text)=>setTitle(text)
        />
        <View style={styles.buttons}>
          <Button
            color={THEME.DANGER_COLOR}
            style={styles.button}
            title="Cancel"
            onPress={() => onCancel()}
          />
          <Button
            onPress={() => saveHandler()}
            color={THEME.GREY_COLOR}
            style={styles.button}
            title="Save"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
