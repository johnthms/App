import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Screen9(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.button1StackRow}>
          <View style={styles.button1Stack}>
            <TouchableOpacity style={styles.button1}></TouchableOpacity>
            <EntypoIcon name="home" style={styles.icon1}></EntypoIcon>
            <View style={styles.rect2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Screen5")}
                style={styles.button2}
              ></TouchableOpacity>
            </View>
          </View>
          <View style={styles.icon2Stack}>
            <FeatherIcon name="triangle" style={styles.icon2}></FeatherIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen8")}
              style={styles.button3}
            ></TouchableOpacity>
          </View>
          <FeatherIcon name="file-text" style={styles.icon3}></FeatherIcon>
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
    marginTop: 650,
    alignSelf: "center"
  },
  button1: {
    top: 3,
    left: 2,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1: {
    top: 0,
    left: 2,
    position: "absolute",
    color: "rgba(202,204,202,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  rect2: {
    top: 2,
    left: 0,
    width: 37,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button2: {
    width: 37,
    height: 37,
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button1Stack: {
    width: 37,
    height: 39
  },
  icon2: {
    top: 1,
    left: 2,
    position: "absolute",
    color: "rgba(199,200,199,1)",
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
    width: 37,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 37,
    height: 37,
    marginLeft: 17,
    marginTop: 2
  },
  icon3: {
    color: "rgba(82,208,20,1)",
    fontSize: 35,
    height: 35,
    width: 35,
    marginLeft: 17,
    marginTop: 4
  },
  icon4: {
    top: 2,
    left: 0,
    position: "absolute",
    color: "rgba(203,206,203,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button4: {
    top: 0,
    left: 0,
    width: 37,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 37,
    height: 37,
    marginLeft: 21,
    marginTop: 1
  },
  icon5: {
    top: 0,
    left: 1,
    position: "absolute",
    color: "rgba(206,206,206,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button5: {
    top: 1,
    left: 0,
    width: 37,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 37,
    height: 38,
    marginLeft: 16,
    marginTop: 3
  },
  button1StackRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 18,
    marginTop: 6
  }
});

export default Screen9;
