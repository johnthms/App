import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Screen10(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/WhatsApp_Image_2022-10-27_at_12.36.49_PM.jpeg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
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
                onPress={() => props.navigation.navigate("Screen8")}
                style={styles.button4}
              ></TouchableOpacity>
            </View>
            <MaterialIconsIcon
              name="person-outline"
              style={styles.icon4}
            ></MaterialIconsIcon>
            <View style={styles.icon5Stack}>
              <FeatherIcon name="mail" style={styles.icon5}></FeatherIcon>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Screen11")}
                style={styles.button5}
              ></TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 400,
    height: 724,
    marginTop: 16,
    marginLeft: -16
  },
  image_imageStyle: {},
  rect1: {
    width: 300,
    height: 51,
    backgroundColor: "rgba(247,246,246,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 637,
    marginLeft: 46
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
    height: 35,
    backgroundColor: "#E6E6E6",
    opacity: 0,
    marginTop: 1
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
    left: 0,
    position: "absolute",
    color: "rgba(186,190,186,1)",
    fontSize: 35,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    top: 0,
    height: 35,
    width: 35
  },
  button3: {
    top: 0,
    left: 0,
    width: 35,
    height: 35,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 35,
    height: 35,
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
    top: 1,
    left: 0,
    width: 35,
    height: 35,
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
    color: "rgba(12,185,12,1)",
    fontSize: 35,
    height: 35,
    width: 35,
    marginLeft: 22,
    marginTop: 4
  },
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(206,206,206,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button5: {
    top: 0,
    left: 0,
    width: 35,
    height: 35,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 35,
    height: 35,
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

export default Screen10;
