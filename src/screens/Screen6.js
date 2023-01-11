import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Screen6(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon2StackRow}>
        <View style={styles.icon2Stack}>
          <MaterialCommunityIconsIcon
            name="home"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <FeatherIcon name="disc" style={styles.icon3}></FeatherIcon>
        </View>
        <View style={styles.buttonStack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen5")}
            style={styles.button}
          >
            <View style={styles.group}>
              <View style={styles.rect2StackRow}>
                <View style={styles.rect2Stack}>
                  <View style={styles.rect2}></View>
                  <EntypoIcon
                    name="chevron-small-left"
                    style={styles.icon}
                  ></EntypoIcon>
                </View>
                <EntypoIcon
                  name="chevron-small-left"
                  style={styles.icon14}
                ></EntypoIcon>
              </View>
            </View>
            <Text style={styles.biology}>Biology</Text>
            <View style={styles.icon4Row}>
              <MaterialCommunityIconsIcon
                name="circle-slice-8"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
              <View style={styles.loremIpsumStack}>
                <Text style={styles.loremIpsum}>12 chapter</Text>
                <MaterialCommunityIconsIcon
                  name="circle-slice-8"
                  style={styles.icon5}
                ></MaterialCommunityIconsIcon>
              </View>
              <Text style={styles.loremIpsum2}>124 hour</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.group5}>
              <View style={styles.group3}>
                <View style={styles.group2}>
                  <View style={styles.group6}>
                    <View style={styles.rect8Column}>
                      <View style={styles.rect8}></View>
                      <View style={styles.rect9}></View>
                      <View style={styles.rect10}></View>
                    </View>
                    <View style={styles.rect8ColumnFiller}>
                      <View style={styles.rect7}></View>
                    </View>
                  </View>
                  <View style={styles.group6Filler}>
                    <View style={styles.group4}>
                      <View style={styles.rect4Column}>
                        <View style={styles.rect4}></View>
                        <View style={styles.rect5}></View>
                        <View style={styles.rect6}></View>
                      </View>
                      <View style={styles.rect4ColumnFiller}>
                        <View style={styles.rect3}>
                          <Text style={styles.loremIpsum3}>
                            Long chapter name can be {"\n"}show here.
                          </Text>
                          <View style={styles.icon6Row}>
                            <MaterialCommunityIconsIcon
                              name="circle-slice-8"
                              style={styles.icon6}
                            ></MaterialCommunityIconsIcon>
                            <View style={styles.chapter1Stack}>
                              <Text style={styles.chapter1}>chapter 1</Text>
                              <MaterialCommunityIconsIcon
                                name="circle-slice-8"
                                style={styles.icon7}
                              ></MaterialCommunityIconsIcon>
                            </View>
                            <Text style={styles.chapter12}>3 hour</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.icon8Row}>
                <MaterialCommunityIconsIcon
                  name="circle-slice-8"
                  style={styles.icon8}
                ></MaterialCommunityIconsIcon>
                <View style={styles.chapter13Stack}>
                  <Text style={styles.chapter13}>chapter 1</Text>
                  <MaterialCommunityIconsIcon
                    name="circle-slice-8"
                    style={styles.icon9}
                  ></MaterialCommunityIconsIcon>
                </View>
                <Text style={styles.text2}>3 hour</Text>
              </View>
              <Text style={styles.text3}>
                Long chapter name can be {"\n"}show here.
              </Text>
              <View style={styles.icon10Row}>
                <MaterialCommunityIconsIcon
                  name="circle-slice-8"
                  style={styles.icon10}
                ></MaterialCommunityIconsIcon>
                <View style={styles.icon13Stack}>
                  <MaterialCommunityIconsIcon
                    name="circle-slice-8"
                    style={styles.icon13}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.chapter14}>chapter 1</Text>
                </View>
                <Text style={styles.text5}>3 hour</Text>
              </View>
              <Text style={styles.text4}>
                Long chapter name can be {"\n"}show here.
              </Text>
              <View style={styles.icon11Row}>
                <MaterialCommunityIconsIcon
                  name="circle-slice-8"
                  style={styles.icon11}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.chapter16}>chapter 1</Text>
                <MaterialCommunityIconsIcon
                  name="circle-slice-8"
                  style={styles.icon12}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.text6}>3 hour</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(242,242,242,1)"
  },
  icon2: {
    top: 1,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon3: {
    top: 0,
    left: 5,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2Stack: {
    width: 45,
    height: 44
  },
  button: {
    top: 0,
    width: 379,
    height: 267,
    position: "absolute",
    backgroundColor: "#063262",
    left: 0
  },
  group: {
    width: 45,
    height: 48,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 24
  },
  rect2: {
    top: 4,
    left: 0,
    width: 39,
    height: 34,
    position: "absolute",
    backgroundColor: "#063262",
    borderWidth: 2,
    borderColor: "rgba(251,250,250,1)",
    borderRadius: 5
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 38
  },
  rect2Stack: {
    width: 39,
    height: 42
  },
  icon14: {
    color: "rgba(128,128,128,1)",
    fontSize: 38,
    marginLeft: 376
  },
  rect2StackRow: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: -408
  },
  biology: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 37,
    width: 127,
    fontSize: 25,
    marginTop: 68,
    marginLeft: 18
  },
  icon4: {
    color: "rgba(78,229,18,1)",
    fontSize: 11,
    height: 12,
    width: 11
  },
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(108,210,7,1)",
    height: 19,
    width: 71,
    fontSize: 10
  },
  icon5: {
    top: 2,
    left: 60,
    position: "absolute",
    color: "rgba(78,229,18,1)",
    fontSize: 11,
    height: 12,
    width: 11
  },
  loremIpsumStack: {
    width: 71,
    height: 19,
    marginLeft: 1
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(137,235,10,1)",
    height: 13,
    width: 75,
    fontSize: 10,
    marginLeft: 1,
    marginTop: 1
  },
  icon4Row: {
    height: 19,
    flexDirection: "row",
    marginLeft: 17,
    marginRight: 203
  },
  button2: {
    width: 285,
    height: 113,
    position: "absolute",
    top: 249,
    left: 47
  },
  group5: {
    width: 285,
    height: 113
  },
  group3: {
    width: 285,
    height: 113
  },
  group2: {
    width: 285,
    height: 113
  },
  group6: {
    width: 285,
    height: 113,
    marginTop: 121
  },
  rect8: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9
  },
  rect9: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9,
    marginTop: 10
  },
  rect10: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9,
    marginTop: 12
  },
  rect8Column: {
    width: 285,
    marginTop: 121
  },
  rect7: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9
  },
  rect8ColumnFiller: {
    flex: 1,
    justifyContent: "center"
  },
  group4: {
    width: 285,
    height: 113,
    marginLeft: 1
  },
  rect4: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9
  },
  rect5: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9,
    marginTop: 10
  },
  rect6: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9,
    marginTop: 12
  },
  rect4Column: {
    width: 285,
    marginTop: 121
  },
  rect3: {
    width: 285,
    height: 113,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 9
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 51,
    width: 245,
    fontSize: 18,
    marginTop: 19,
    marginLeft: 19
  },
  icon6: {
    color: "rgba(193,194,193,1)",
    fontSize: 11,
    height: 12,
    width: 11
  },
  chapter1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10
  },
  icon7: {
    top: 0,
    left: 52,
    position: "absolute",
    color: "rgba(193,194,193,1)",
    fontSize: 11,
    height: 12,
    width: 11
  },
  chapter1Stack: {
    width: 63,
    height: 12,
    marginLeft: 5
  },
  chapter12: {
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10,
    marginLeft: 6
  },
  icon6Row: {
    height: 12,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 19,
    marginRight: 118
  },
  rect4ColumnFiller: {
    flex: 1,
    justifyContent: "center"
  },
  group6Filler: {
    flex: 1,
    justifyContent: "center"
  },
  icon8: {
    color: "rgba(193,194,193,1)",
    fontSize: 11
  },
  chapter13: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10
  },
  icon9: {
    top: 0,
    left: 52,
    position: "absolute",
    color: "rgba(193,194,193,1)",
    fontSize: 11
  },
  chapter13Stack: {
    width: 63,
    height: 12,
    marginLeft: 5
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10,
    marginLeft: 2
  },
  icon8Row: {
    height: 12,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 20,
    marginRight: 121
  },
  text3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 51,
    width: 245,
    fontSize: 18,
    marginTop: 52,
    marginLeft: 25
  },
  icon10: {
    color: "rgba(193,194,193,1)",
    fontSize: 11
  },
  icon13: {
    top: 0,
    left: 52,
    position: "absolute",
    color: "rgba(193,194,193,1)",
    fontSize: 11
  },
  chapter14: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10
  },
  icon13Stack: {
    width: 63,
    height: 12,
    marginLeft: 5
  },
  text5: {
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10,
    marginLeft: 1
  },
  icon10Row: {
    height: 12,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 122
  },
  text4: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 51,
    width: 245,
    fontSize: 18,
    marginTop: 61,
    marginLeft: 25
  },
  icon11: {
    color: "rgba(193,194,193,1)",
    fontSize: 11
  },
  chapter16: {
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 10,
    width: 44,
    fontSize: 10,
    transform: [
      {
        rotate: "1.00deg"
      }
    ],
    marginLeft: 1,
    marginTop: 1
  },
  icon12: {
    color: "rgba(193,194,193,1)",
    fontSize: 11,
    marginLeft: 13,
    marginTop: 1
  },
  text6: {
    fontFamily: "roboto-regular",
    color: "rgba(196,194,194,1)",
    height: 12,
    width: 63,
    fontSize: 10,
    marginLeft: 1,
    marginTop: 1
  },
  icon11Row: {
    height: 13,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 121
  },
  buttonStack: {
    width: 379,
    height: 362,
    marginLeft: 246,
    marginTop: 35
  },
  icon2StackRow: {
    height: 397,
    flexDirection: "row",
    flex: 1,
    marginRight: -17,
    marginLeft: -293,
    marginTop: -14
  }
});

export default Screen6;
