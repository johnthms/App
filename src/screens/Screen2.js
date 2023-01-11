import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Screen2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg2.webp")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/WhatsApp_Image_2022-10-25_at_8.09.13_PM1.jpeg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <Text style={styles.studentDetails}>Student details</Text>
      <View style={styles.rect}>
        <TextInput
          placeholder="   Full Name"
          style={styles.mobileNumber1}
        ></TextInput>
        <TextInput
          placeholder="   Email"
          style={styles.mobileNumber2}
        ></TextInput>
        <TextInput
          placeholder="   State"
          style={styles.mobileNumber3}
        ></TextInput>
        <TextInput
          placeholder="   Pin Code"
          style={styles.mobileNumber4}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Screen3")}
          style={styles.button}
        >
         
            <Text style={styles.register}>Register</Text>
         
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 32
  },
  image: {
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
    left: 101
  },
  imageStack: {
    width: 492,
    height: 326,
    marginTop: -16,
    marginLeft: -56
  },
  studentDetails: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 23,
    marginTop: 24,
    marginLeft: 102
  },
  rect: {
    width: 360,
    height: 387,
    backgroundColor: "#061e3e",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 22,
    marginTop: 9
  },
  mobileNumber1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 260,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 23,
    marginLeft: 50
  },
  mobileNumber2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 260,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 12,
    marginLeft: 50
  },
  mobileNumber3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 265,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 12,
    marginLeft: 45
  },
  mobileNumber4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 265,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginTop: 9,
    marginLeft: 45
  },
  button: {
    width: 269,
    height: 51,
    backgroundColor: "#18eb29",
    borderRadius: 13,
    marginTop: 9,
    marginLeft: 45
  },
  register: {
    fontFamily: "roboto-regular",
    color: "rgba(250,245,245,1)",
    fontSize: 19,
     marginTop: 9,
    marginLeft: 10
  }
});

export default Screen2;
