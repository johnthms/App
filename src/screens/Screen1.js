import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Screen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.textInput1Row}>
          <TextInput
            placeholder=""
            textBreakStrategy="highQuality"
            style={styles.textInput1}
          ></TextInput>
          <TextInput
            placeholder=""
            textBreakStrategy="highQuality"
            style={styles.textInput6}
          ></TextInput>
          <View style={styles.group}>
            <TextInput
              placeholder=""
              textBreakStrategy="highQuality"
              style={styles.textInput5}
            ></TextInput>
          </View>
          <TextInput
            placeholder=""
            textBreakStrategy="highQuality"
            style={styles.textInput2}
          ></TextInput>
          <TextInput
            placeholder=""
            textBreakStrategy="highQuality"
            style={styles.textInput4}
          ></TextInput>
          <TextInput
            placeholder=""
            textBreakStrategy="highQuality"
            style={styles.textInput3}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Screen2")}
          style={styles.button}
        >
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
        <View style={styles.iconRow}>
          <Icon name="ios-call" style={styles.icon}></Icon>
          <Text style={styles.contactUs}>Contact Us</Text>
        </View>
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg1.webp")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/WhatsApp_Image_2022-10-25_at_8.09.13_PM.jpeg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <Text style={styles.verificationCode}>Verification code</Text>
      <Text style={styles.loremIpsum}>Please type the verification code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 287,
    backgroundColor: "rgba(6,30,62,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 477
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    marginTop: 1
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    marginLeft: 6,
    marginTop: 2
  },
  group: {
    width: 54,
    height: 57,
    transform: [
      {
        rotate: "-2.00deg"
      }
    ],
    marginLeft: 4,
    marginTop: 1
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    transform: [
      {
        rotate: "3.00deg"
      }
    ],
    marginTop: 1,
    marginLeft: 1
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    transform: [
      {
        rotate: "-1.00deg"
      }
    ],
    marginLeft: 4,
    marginTop: 2
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    transform: [
      {
        rotate: "-1.00deg"
      }
    ],
    marginLeft: 7,
    marginTop: 2
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059",
    marginLeft: 4
  },
  textInput1Row: {
    height: 58,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 10,
    marginRight: 11
  },
  button: {
    width: 261,
    height: 49,
    backgroundColor: "#18eb29",
    borderRadius: 11,
    marginTop: 25,
    marginLeft: 50
  },
  resendOtp: {
    fontFamily: "roboto-regular",
    color: "rgba(218,216,216,1)",
    fontSize: 19,
    marginTop: 13,
    marginLeft: 78
  },
  icon: {
    color: "#27c235",
    fontSize: 40,
    height: 43,
    width: 30
  },
  contactUs: {
    fontFamily: "roboto-regular",
    color: "#18eb29",
    fontSize: 22,
    marginTop: 9
  },
  iconRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 104,
    marginRight: 118
  },
  image: {
    top: 0,
    left: 0,
    width: 447,
    height: 187,
    position: "absolute"
  },
  image2: {
    top: 126,
    left: 35,
    width: 360,
    height: 274,
    position: "absolute"
  },
  imageStack: {
    width: 447,
    height: 400,
    marginTop: -781,
    marginLeft: -35
  },
  verificationCode: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    marginTop: 20,
    marginLeft: 104
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(123,122,122,1)",
    fontSize: 16,
    marginLeft: 65
  }
});

export default Screen1;
