import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Screen4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen5")}
              style={styles.button}
            >
              <Icon name="arrow-right" style={styles.icon}></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.rect4}></View>
        </View>
      </View>
      <View style={styles.rect}>
        <Text style={styles.imageIllustrations}>image/illustrations</Text>
      </View>
      <Text style={styles.appTourTitle}>App tour title</Text>
      <Text style={styles.loremIpsum}>The app tour description goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 17
  },
  group: {
    width: 61,
    height: 59,
    marginTop: 623,
    marginLeft: 149
  },
  rect3: {
    top: 0,
    left: 0,
    width: 61,
    height: 59,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 9
  },
  button: {
    width: 56,
    height: 53,
    backgroundColor: "rgba(24,235,41,1)",
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "rgba(255,255,255,1)",
    borderStyle: "solid",
    marginTop: 3,
    marginLeft: 3
  },
  icon: {
    color: "rgba(248,247,247,1)",
    fontSize: 22,
    height: 24,
    width: 22,
    marginTop: 14,
    marginLeft: 15
  },
  rect4: {
    top: 0,
    left: 35,
    width: 27,
    height: 27,
    position: "absolute",
    backgroundColor: "#18eb29",
    borderRadius: 7
  },
  rect3Stack: {
    width: 62,
    height: 59
  },
  rect: {
    width: 326,
    height: 481,
    backgroundColor: "rgba(243,240,240,1)",
    borderRadius: 16,
    marginTop: -644,
    alignSelf: "center"
  },
  imageIllustrations: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 13,
    marginTop: 206,
    marginLeft: 109
  },
  appTourTitle: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 21,
    marginTop: 35,
    marginLeft: 120
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(142,137,137,1)",
    marginLeft: 70
  }
});

export default Screen4;
