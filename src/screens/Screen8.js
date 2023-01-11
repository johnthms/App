import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Screen8(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button1StackRow}>
          <View style={styles.button1Stack}>
            <TouchableOpacity style={styles.button1}></TouchableOpacity>
            <EntypoIcon name="home" style={styles.icon1}></EntypoIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen5")}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
          <FeatherIcon name="triangle" style={styles.icon2}></FeatherIcon>
          <View style={styles.icon3Stack}>
            <FeatherIcon name="file-text" style={styles.icon3}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen9")}
              style={styles.button3}
            ></TouchableOpacity>
          </View>
          <View style={styles.icon4Stack}>
            <MaterialIconsIcon
              name="person-outline"
              style={styles.icon4}
            ></MaterialIconsIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen10")}
              style={styles.button4}
            ></TouchableOpacity>
          </View>
          <View style={styles.icon5Stack}>
            <FeatherIcon name="mail" style={styles.icon5}></FeatherIcon>
            <FeatherIcon name="mail" style={styles.icon6}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen11")}
              style={styles.button5}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 300,
    height: 51,
    backgroundColor: "rgba(247,246,246,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 651,
    alignSelf: "center"
  },
  button1: {
    top: 3,
    left: 6,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1: {
    top: 0,
    left: 6,
    position: "absolute",
    color: "rgba(202,204,202,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 0,
    left: 0,
    width: 41,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button1Stack: {
    width: 41,
    height: 45,
    marginTop: 2
  },
  icon2: {
    color: "rgba(7,194,7,1)",
    fontSize: 35,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    height: 35,
    width: 35,
    marginLeft: 19,
    marginTop: 5
  },
  icon3: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(210,212,209,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 41,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 41,
    height: 45,
    marginLeft: 13
  },
  icon4: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(203,206,203,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button4: {
    top: 0,
    left: 0,
    width: 41,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 41,
    height: 45,
    marginLeft: 16,
    marginTop: 1
  },
  icon5: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(206,206,206,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  icon6: {
    top: 4,
    left: 3,
    position: "absolute",
    color: "rgba(206,206,206,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button5: {
    top: 0,
    left: 0,
    width: 41,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 41,
    height: 45,
    marginLeft: 13,
    marginTop: 1
  },
  button1StackRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 14,
    marginTop: 3
  }
});

export default Screen8;
