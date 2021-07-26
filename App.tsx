import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App(): JSX.Element | undefined {
  const [init, setInit] = useState(false);

  if (init) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setInit(true)}
        onError={console.warn}
      />
    );
  }
}
