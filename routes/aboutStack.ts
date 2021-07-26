import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../views/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About",
    },
  },
};

const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default createAppContainer(aboutStack);
