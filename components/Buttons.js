import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Button from "./Button";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { colors } from "../config/color";

const dimensions = Dimensions.get("screen");

const Buttons = () => {
  return (
    <View style={styles.buttons}>
      <View style={styles.row}>
        <Button textStyle={{ color: colors.blue }} value={"C"} />
        <Button textStyle={{ color: colors.blue }} value={"/"} />
        <Button textStyle={{ color: colors.blue }} value={"*"} />
        <Button
          value={
            <MaterialCommunityIcons
              color={colors.blue}
              size={20}
              name="arrow-left"
            />
          }
        />
      </View>
      <View style={styles.row}>
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button textStyle={{ color: colors.blue }} value={"+"} />
      </View>
      <View style={styles.row}>
        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
        <Button textStyle={{ color: colors.blue }} value={"-"} />
      </View>
      <View style={styles.row}>
        <Button value={1} />
        <Button value={2} />
        <Button value={3} />
        <Button textStyle={{ fontSize: 30 }} value={"."} />
      </View>
      <View style={styles.row}>
        <Button style={{ width: dimensions.width / 2 }} value={0} />
        <Button
          style={{
            width: dimensions.width / 2,
            backgroundColor: "#3bc597",

            // flex: -1,
          }}
          value={"="}
          textStyle={{ color: colors.white }}
        />
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  buttons: {},
});
