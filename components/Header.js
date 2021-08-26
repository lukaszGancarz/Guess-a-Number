import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: "10%",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});

export default Header;
