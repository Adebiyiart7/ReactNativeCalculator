import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ onAddItem }) => {
  const [textInput, setTextInput] = useState("");

  const onChange = (textValue) => {
    setTextInput(textValue);
  };

  return (
    <View>
      <TextInput
        value={textInput}
        placeholder="Add Item ..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        onPress={() => onAddItem(textInput)}
        style={styles.button}
      >
        <Icon name="plus" size={20} color="firebrick" />
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: "lightblue",
    padding: 7,
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 16,
  },
});
