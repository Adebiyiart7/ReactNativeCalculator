import React, { useState } from "react";
import {
  Alert,
  FlatList,
  View,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.random().toString().slice(2, 8),
      text: "Milk",
    },
    {
      id: Math.random().toString().slice(2, 8),
      text: "Rice",
    },
    {
      id: Math.random().toString().slice(2, 8),
      text: "Bread",
    },
    {
      id: Math.random().toString().slice(2, 8),
      text: "Sugar",
    },
    {
      id: Math.random().toString().slice(2, 8),
      text: "Floor",
    },
  ]);

  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onAddItem = (item) => {
    // if (!item) {
    //   // Alert.alert("Error", "Please enter an item", { text: "OK" });
    // } else {
    const newItem = {
      id: "2",
      text: item,
    };

    setItems((prevItems) => [newItem, ...prevItems]);
    // }
  };

  return (
    <View style={styles.container}>
      <Header title={"Shopping List"} />
      <AddItem onAddItem={onAddItem} />
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <ListItem item={item} index={index} onDelete={onDelete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Platform.OS !== "web" &&
      (Platform.OS === "android" ? StatusBar.currentHeight : 20),
    flex: 1,
  },
});

export default App;
