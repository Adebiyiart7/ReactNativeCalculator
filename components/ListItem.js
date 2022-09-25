import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ListItem = ({ item, index, onDelete }) => {
  return (
    <TouchableOpacity index={index} style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => {
            onDelete(item.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "500",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
