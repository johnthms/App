import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Screen3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg2.webp")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("../assets/images/WhatsApp_Image_2022-10-25_at_8.09.13_PM1.jpeg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <Text style={styles.loremIpsum}>Select your school board</Text>
        <View style={styles.rect1}>
          <TextInput
            placeholder="   Select Board"
            style={styles.mobileNumber1}
          ></TextInput>
          <TextInput
            placeholder="   Class"
            style={styles.mobileNumber2}
          ></TextInput>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen4")}
            style={styles.button1}
          >
            <Text style={styles.loremIpsum2}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  group: {
    width: 492,
    height: 781,
    marginLeft: -52
  },
  image1: {
    top: 0,
    width: 492,
    height: 233,
    position: "absolute",
    left: 0
  },
  image2: {
    top: 141,
    width: 269,
    height: 185,
    position: "absolute",
    left: 97
  },
  image1Stack: {
    width: 492,
    height: 326
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 19,
    marginTop: 67,
    marginLeft: 126
  },
  rect1: {
    width: 360,
    height: 277,
    backgroundColor: "#061e3e",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 22,
    marginTop: 88,
    marginLeft: 52
  },
  mobileNumber1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 278,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 29,
    marginLeft: 45
  },
  mobileNumber2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 278,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 9,
    marginLeft: 46
  },
  button1: {
    width: 276,
    height: 48,
    backgroundColor: "#18eb29",
    shadowColor: "rgba(20,132,23,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    marginTop: 30,
    marginLeft: 46
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(252,252,252,1)",
    fontSize: 19,
    marginTop: 11,
    marginLeft: 96
  }
});

export default Screen3;
