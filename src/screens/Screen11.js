import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Screen11(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button1StackRow}>
          <View style={styles.button1Stack}>
            <TouchableOpacity style={styles.button1}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Screen5")}
                style={styles.button2}
              ></TouchableOpacity>
            </TouchableOpacity>
            <EntypoIcon name="home" style={styles.icon1}></EntypoIcon>
          </View>
          <View style={styles.icon2Stack}>
            <FeatherIcon name="triangle" style={styles.icon2}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen8")}
              style={styles.button3}
            ></TouchableOpacity>
          </View>
          <View style={styles.icon3Stack}>
            <FeatherIcon name="file-text" style={styles.icon3}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen9")}
              style={styles.button4}
            ></TouchableOpacity>
          </View>
          <View style={styles.icon4Stack}>
            <MaterialIconsIcon
              name="person-outline"
              style={styles.icon4}
            ></MaterialIconsIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen10")}
              style={styles.button5}
            ></TouchableOpacity>
          </View>
          <FeatherIcon name="mail" style={styles.icon5}></FeatherIcon>
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
    marginTop: 653,
    alignSelf: "center"
  },
  button1: {
    top: 3,
    left: 0,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button2: {
    width: 35,
    height: 36,
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(202,204,202,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button1Stack: {
    width: 35,
    height: 39
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(190,192,190,1)",
    fontSize: 35,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    height: 35,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 35,
    height: 36,
    marginLeft: 19,
    marginTop: 3
  },
  icon3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(210,212,209,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button4: {
    top: 0,
    left: 0,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 35,
    height: 36,
    marginLeft: 16,
    marginTop: 3
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(203,206,203,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button5: {
    top: 0,
    left: 0,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 35,
    height: 36,
    marginLeft: 22,
    marginTop: 3
  },
  icon5: {
    color: "rgba(20,179,12,1)",
    fontSize: 35,
    height: 35,
    width: 35,
    marginLeft: 19,
    marginTop: 3
  },
  button1StackRow: {
    height: 39,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 20,
    marginTop: 3
  }
});

export default Screen11;
