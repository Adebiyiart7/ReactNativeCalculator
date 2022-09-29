import { StyleSheet, Platform, StatusBar, Text, View } from "react-native";
import React from "react";
import Display from "./app/components/Display";
import Buttons from "./app/components/Buttons";
import Constants from "expo-constants";
import { colors } from "./app/config/color";

const App = () => {
  return (
    <View style={styles.container}>
      <Display />
      <Buttons />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.app_bg,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
  },
});
