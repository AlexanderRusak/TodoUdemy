import React from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Edit title name"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            color={THEME.DANGER_COLOR}
            style={styles.button}
            title="Cancel"
            onPress={() => onCancel()}
          />
          <Button color={THEME.GREY_COLOR} style={styles.button} title="Save" />
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
