import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function ScreenComponent(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(6,50,98,1)",
    borderRadius: 10
  }
});

export default ScreenComponent;
