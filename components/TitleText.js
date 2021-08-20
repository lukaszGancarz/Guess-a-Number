import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 23,
  },
});

export default TitleText;
