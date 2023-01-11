import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import ScreenComponent from "../components/ScreenComponent";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Screen5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.group12}>
                <View style={styles.rect14}>
                  <View style={styles.ellipse9Row}>
                    <Svg viewBox="0 0 18.64 17.3" style={styles.ellipse9}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="#18eb29"
                        cx={9}
                        cy={9}
                        rx={9}
                        ry={9}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.biology3}>Class</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.group11}>
              <View style={styles.rect5}>
                <View style={styles.ellipse3Row}>
                  <Svg viewBox="0 0 18.64 17.3" style={styles.ellipse3}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="#18eb29"
                      cx={9}
                      cy={9}
                      rx={9}
                      ry={9}
                    ></Ellipse>
                  </Svg>
                  <Text style={styles.biology2}>Biology</Text>
                </View>
              </View>
            </View>
            <View style={styles.group10}>
              <View style={styles.rect6}>
                <View style={styles.ellipse4Row}>
                  <Svg viewBox="0 0 18.64 17.3" style={styles.ellipse4}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="#18eb29"
                      cx={9}
                      cy={9}
                      rx={9}
                      ry={9}
                    ></Ellipse>
                  </Svg>
                  <Text style={styles.physics2}>Physics</Text>
                </View>
              </View>
            </View>
            <View style={styles.group9}>
              <View style={styles.rect7}>
                <View style={styles.ellipse5Row}>
                  <Svg viewBox="0 0 18.64 17.3" style={styles.ellipse5}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="#18eb29"
                      cx={9}
                      cy={9}
                      rx={9}
                      ry={9}
                    ></Ellipse>
                  </Svg>
                  <Text style={styles.chemistry2}>Chemistry</Text>
                </View>
              </View>
            </View>
            <View style={styles.group8}>
              <View style={styles.rect8}>
                <View style={styles.ellipse6Row}>
                  <Svg viewBox="0 0 18.64 17.3" style={styles.ellipse6}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="#18eb29"
                      cx={9}
                      cy={9}
                      rx={9}
                      ry={9}
                    ></Ellipse>
                  </Svg>
                  <Text style={styles.maths}>Maths</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Image
        source={require("../assets/images/WhatsApp_Image_2022-10-26_at_3.44.43_PM1.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.recentCourses}>Recent Courses</Text>
      <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.image2StackStackRow}>
            <View style={styles.image2StackStack}>
              <View style={styles.image2Stack}>
                <Image
                  source={require("../assets/images/WhatsApp_Image_2022-10-26_at_7.37.12_PM.jpeg")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Image
                  source={require("../assets/images/WhatsApp_Image_2022-10-26_at_7.37.12_PM.jpeg")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
              </View>
              <Image
                source={require("../assets/images/WhatsApp_Image_2022-10-26_at_7.37.12_PM.jpeg")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
            <Image
              source={require("../assets/images/WhatsApp_Image_2022-10-26_at_7.37.12_PM.jpeg")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Image
              source={require("../assets/images/WhatsApp_Image_2022-10-26_at_7.37.12_PM.jpeg")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
        </ScrollView>
      </View>
      <View style={styles.scrollArea3}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea3_contentContainerStyle}
        >
          <View style={styles.rect12StackStack}>
            <View style={styles.rect12Stack}>
              <View style={styles.rect12}>
                <View style={styles.group6}>
                  <View style={styles.group5}>
                    <View style={styles.group4}>
                      <View style={styles.group3}>
                        <View style={styles.group2}>
                          <View style={styles.group}>
                            <View style={styles.ScreenComponentStack}>
                              <ScreenComponent
                                style={styles.ScreenComponent}
                              ></ScreenComponent>
                              <Svg
                                viewBox="0 0 46.82 43.92"
                                style={styles.ellipse7}
                              >
                                <Ellipse
                                  stroke="rgba(230, 230, 230,1)"
                                  strokeWidth={0}
                                  fill="rgba(8,64,122,1)"
                                  cx={23}
                                  cy={22}
                                  rx={23}
                                  ry={22}
                                ></Ellipse>
                              </Svg>
                              <Text style={styles.loremIpsum}>
                                Avail free online{"\n"}counselling session
                              </Text>
                              <Text style={styles.loremIpsum2}>
                                By Learning career{"\n"}experts
                              </Text>
                              <View style={styles.rect10}></View>
                              <Text style={styles.scheduleACall}>
                                Schedule a call
                              </Text>
                              <View style={styles.group7}>
              <View style={styles.rect11}>
                <Svg viewBox="0 0 46.82 43.92" style={styles.ellipse8}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(8,64,122,1)"
                    cx={23}
                    cy={22}
                    rx={23}
                    ry={22}
                  ></Ellipse>
                </Svg>
                <View style={styles.loremIpsum3Stack}>
                  <Text style={styles.loremIpsum3}>
                    Avail free online{"\n"}counselling session
                  </Text>
                  <Text style={styles.loremIpsum4}>
                    By Learning career{"\n"}experts
                  </Text>
                </View>
                <View style={styles.rect13}>
                  <Text style={styles.scheduleACall2}>Schedule a call</Text>
                </View>
              </View>
            </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rect15}>
                <View style={styles.icon1StackRow}>
                  <View style={styles.icon1Stack}>
                    <EntypoIcon name="home" style={styles.icon1}></EntypoIcon>
                    <TouchableOpacity style={styles.button2}></TouchableOpacity>
                  </View>
                  <View style={styles.icon2Stack}>
                    <FeatherIcon
                      name="triangle"
                      style={styles.icon2}
                    ></FeatherIcon>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Screen8")}
                      style={styles.button3}
                    ></TouchableOpacity>
                  </View>
                  <View style={styles.icon3Stack}>
                    <FeatherIcon
                      name="file-text"
                      style={styles.icon3}
                    ></FeatherIcon>
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
                  <View style={styles.icon5Stack}>
                    <FeatherIcon name="mail" style={styles.icon5}></FeatherIcon>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Screen11")}
                      style={styles.button6}
                    ></TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 11
  },
  scrollArea: {
    width: 360,
    height: 68,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 293
  },
  scrollArea_contentContainerStyle: {
    width: 480,
    height: 68,
    flexDirection: "row"
  },
  button: {
    width: 88,
    height: 47,
    marginTop: 2
  },
  group12: {
    width: 88,
    height: 47
  },
  rect14: {
    width: 88,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row"
  },
  ellipse9: {
    width: 19,
    height: 17
  },
  biology3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 13,
    width: 56,
    marginLeft: 7
  },
  ellipse9Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginLeft: 6,
    marginTop: 15
  },
  group11: {
    width: 88,
    height: 47,
    marginLeft: 8,
    marginTop: 2
  },
  rect5: {
    width: 88,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row"
  },
  ellipse3: {
    width: 19,
    height: 17
  },
  biology2: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 13,
    width: 56,
    marginLeft: 5
  },
  ellipse3Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 1,
    marginLeft: 7,
    marginTop: 17
  },
  group10: {
    width: 88,
    height: 47,
    marginLeft: 4,
    marginTop: 2
  },
  rect6: {
    width: 88,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row"
  },
  ellipse4: {
    width: 19,
    height: 17
  },
  physics2: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 13,
    width: 55,
    marginLeft: 3
  },
  ellipse4Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginLeft: 11,
    marginTop: 17
  },
  group9: {
    width: 88,
    height: 47,
    marginLeft: 6
  },
  rect7: {
    width: 88,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row"
  },
  ellipse5: {
    width: 19,
    height: 17
  },
  chemistry2: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 17,
    width: 58,
    fontSize: 12,
    marginTop: 2
  },
  ellipse5Row: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 3,
    marginLeft: 8,
    marginTop: 15
  },
  group8: {
    width: 88,
    height: 47,
    marginLeft: 8
  },
  rect8: {
    width: 88,
    height: 47,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row"
  },
  ellipse6: {
    width: 19,
    height: 17
  },
  maths: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 13,
    width: 49,
    marginLeft: 4,
    marginTop: 2
  },
  ellipse6Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 5,
    marginTop: 15
  },
  buttonRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: -120,
    marginLeft: 14,
    marginTop: 11
  },
  image: {
    width: 781,
    height: 264,
    marginTop: -332,
    marginLeft: -207
  },
  recentCourses: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 107,
    marginTop: 77,
    marginLeft: 9
  },
  scrollArea2: {
    width: 360,
    height: 130,
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea2_contentContainerStyle: {
    width: 1068,
    height: 130,
    flexDirection: "row"
  },
  image2: {
    left: 0,
    width: 200,
    height: 200,
    position: "absolute",
    top: 0
  },
  image4: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 68,
    top: 0
  },
  image2Stack: {
    top: 0,
    left: 0,
    width: 268,
    height: 200,
    position: "absolute"
  },
  image3: {
    left: 217,
    width: 200,
    height: 200,
    position: "absolute",
    top: 0
  },
  image2StackStack: {
    width: 417,
    height: 200
  },
  image5: {
    width: 200,
    height: 200,
    marginLeft: 227
  },
  image6: {
    width: 200,
    height: 200,
    marginLeft: 12
  },
  image2StackStackRow: {
    height: 200,
    flexDirection: "row",
    flex: 1,
    marginRight: -708,
    marginLeft: 12,
    marginTop: -35
  },
  scrollArea3: {
    width: 366,
    height: 213,
    backgroundColor: "rgba(255,254,254,1)",
    borderRadius: 8,
    marginTop: 9
  },
  scrollArea3_contentContainerStyle: {
    width: 366,
    height: 213
  },
  rect12: {
    left: 0,
    width: 141,
    height: 175,
    position: "absolute",
    flexDirection: "row",
    top: 0
  },
  group6: {
    width: 141,
    height: 175
  },
  group5: {
    width: 141,
    height: 175
  },
  group4: {
    width: 141,
    height: 175
  },
  group3: {
    width: 141,
    height: 175
  },
  group2: {
    width: 141,
    height: 175
  },
  group: {
    width: 141,
    height: 175
  },
  ScreenComponent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 175,
    width: 141
  },
  ellipse7: {
    top: 13,
    left: 23,
    width: 47,
    height: 44,
    position: "absolute"
  },
  loremIpsum: {
    left: 11,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(234,233,233,1)",
    height: 37,
    width: 118,
    fontSize: 12,
    top: 69
  },
  loremIpsum2: {
    top: 105,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(163,162,162,1)",
    height: 26,
    width: 118,
    fontSize: 10
  },
  rect10: {
    top: 141,
    left: 19,
    width: 92,
    height: 20,
    position: "absolute",
    backgroundColor: "rgba(113,243,3,1)",
    borderRadius: 2
  },
  scheduleACall: {
    top: 146,
    left: 33,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 22,
    width: 69,
    fontSize: 9
  },
  ScreenComponentStack: {
    width: 141,
    height: 175,
    marginTop: 1,
    marginLeft: 1
  },
  rect15: {
    top: 107,
    left: 9,
    width: 300,
    height: 51,
    position: "absolute",
    backgroundColor: "rgba(247,246,246,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(56,212,13,1)",
    fontSize: 35,
    height: 38,
    width: 35
  },
  button2: {
    top: 4,
    left: 0,
    width: 35,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon1Stack: {
    width: 35,
    height: 40
  },
  icon2: {
    top: 0,
    left: 5,
    position: "absolute",
    color: "rgba(215,216,215,1)",
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
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 40,
    height: 36,
    marginLeft: 14,
    marginTop: 3
  },
  icon3: {
    top: 0,
    left: 3,
    position: "absolute",
    color: "rgba(210,212,209,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button4: {
    top: 0,
    left: 0,
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 40,
    height: 36,
    marginLeft: 13,
    marginTop: 3
  },
  icon4: {
    top: 0,
    left: 3,
    position: "absolute",
    color: "rgba(203,206,203,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button5: {
    top: 1,
    left: 0,
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 40,
    height: 37,
    marginLeft: 17,
    marginTop: 3
  },
  icon5: {
    top: 0,
    left: 2,
    position: "absolute",
    color: "rgba(206,206,206,1)",
    fontSize: 35,
    height: 35,
    width: 35
  },
  button6: {
    top: 1,
    left: 0,
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon5Stack: {
    width: 40,
    height: 37,
    marginLeft: 15,
    marginTop: 3
  },
  icon1StackRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 20,
    marginTop: 3
  },
  rect12Stack: {
    top: 0,
    left: 0,
    width: 309,
    height: 175,
    position: "absolute"
  },
  group7: {
    top: 5,
    left: 156,
    width: 157,
    height: 189,
    position: "absolute"
  },
  rect11: {
    width: 141,
    height: 175,
    backgroundColor: "rgba(6,50,98,1)",
    borderRadius: 10
  },
  ellipse8: {
    width: 47,
    height: 44,
    marginTop: 10,
    marginLeft: 24
  },
  loremIpsum3: {
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(234,233,233,1)",
    height: 37,
    width: 118,
    fontSize: 12,
    top: 0
  },
  loremIpsum4: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(192,190,190,1)",
    height: 32,
    width: 113,
    fontSize: 10
  },
  loremIpsum3Stack: {
    width: 118,
    height: 64,
    marginTop: 15,
    marginLeft: 11
  },
  rect13: {
    width: 99,
    height: 19,
    backgroundColor: "#71f303",
    borderRadius: 2,
    marginTop: 4,
    marginLeft: 19
  },
  scheduleACall2: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 9,
    width: 79,
    fontSize: 9,
    marginTop: 4,
    marginLeft: 16
  },
  rect12StackStack: {
    width: 313,
    height: 194,
    marginTop: 19,
    marginLeft: 21
  }
});

export default Screen5;
