import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import { colors } from "../config/color";

const dimensions = Dimensions.get("screen");

const Button = ({ value, style, textStyle }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.app_bg}
      style={[styles.button, { ...style }]}
      onPress={() => console.log("Tapped")}
    >
      <Text style={[styles.text, { ...textStyle }]}>{value}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: dimensions.width / 4,
    height: dimensions.width / 4,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.app_bg,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: colors.app_bg,
  },
  text: {
    fontSize: 20,
  },
});

export default Button;
