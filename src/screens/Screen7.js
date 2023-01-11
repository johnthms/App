import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Screen7(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/WhatsApp_Image_2022-10-27_at_11.41.16_AM.jpeg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Screen6")}
          style={styles.button}
        >
          <View style={styles.rectStack}>
            <View style={styles.rect}></View>
            <Icon name="chevron-small-left" style={styles.icon1}></Icon>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 477,
    height: 857,
    marginTop: -7,
    marginLeft: -64
  },
  image_imageStyle: {},
  button: {
    width: 33,
    height: 36,
    marginTop: 65,
    marginLeft: 85
  },
  rect: {
    top: 0,
    left: 0,
    width: 33,
    height: 32,
    position: "absolute",
    backgroundColor: "#00202f",
    borderWidth: 1,
    borderColor: "rgba(248,241,241,1)",
    borderRadius: 3
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(67,181,14,1)",
    fontSize: 33
  },
  rectStack: {
    width: 33,
    height: 36
  }
});

export default Screen7;
