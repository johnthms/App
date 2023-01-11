import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

function Screen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.textInputRow}>
            <TextInput
              placeholder="   +91"
              textBreakStrategy="highQuality"
              style={styles.textInput}
            ></TextInput>
            <TextInput
              placeholder="       Mobile Number"
              style={styles.mobileNumber}
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen1")}
            style={styles.button}
          >
            <Text style={styles.loremIpsum}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect2}></View>
      </View>
      <Image
        source={require("../assets/images/inmakes-learning-hub-kazhakuttam-thiruvananthapuram-tally-training-institutes-52yebidxyg.webp")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum2}>Enter your mobile number</Text>
      <Text style={styles.loremIpsum3}>We will send you an OTP to verify.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,83,7,0)",
    borderWidth: 1,
    borderColor: "#112059",
    borderRadius: 20,
    borderStyle: "dashed"
  },
  rect: {
    top: 0,
    width: 372,
    height: 256,
    position: "absolute",
    backgroundColor: "rgba(6,30,62,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    left: 0,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderStyle: "solid",
    borderRadius: 28
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 52,
    borderRadius: 9,
    backgroundColor: "#112059"
  },
  mobileNumber: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 216,
    borderRadius: 10,
    backgroundColor: "#112059",
    marginLeft: 8
  },
  textInputRow: {
    height: 55,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 52,
    marginRight: 44
  },
  button: {
    width: 279,
    height: 53,
    backgroundColor: "#18eb29",
    shadowColor: "#18eb29",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 12,
    marginTop: 25,
    marginLeft: 55
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(243,240,240,1)",
    fontSize: 21,
    marginTop: 14,
    marginLeft: 98
  },
  rect2: {
    top: 225,
    left: 368,
    width: 8,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rectStack: {
    width: 376,
    height: 256,
    marginTop: 526,
    marginLeft: -8
  },
  image: {
    width: 313,
    height: 307,
    marginTop: -699,
    marginLeft: 39
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    marginTop: 84,
    marginLeft: 68
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(156,154,154,1)",
    marginLeft: 83
  }
});

export default Screen;
