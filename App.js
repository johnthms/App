import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Home from "./src/screens/Home";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";
import Screen5 from "./src/screens/Screen5";
import Screen6 from "./src/screens/Screen6";
import Screen7 from "./src/screens/Screen7";
import Screen8 from "./src/screens/Screen8";
import Screen9 from "./src/screens/Screen9";
import Screen10 from "./src/screens/Screen10";
import Screen11 from "./src/screens/Screen11";



const StackNavigation = createStackNavigator(
  {
    
    Home: Home,
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3,
    Screen4: Screen4,
    Screen5: Screen5,
    Screen6: Screen6,
    Screen7: Screen7,
    Screen8: Screen8,
    Screen9: Screen9,
    Screen10: Screen10,
    Screen11: Screen11
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
