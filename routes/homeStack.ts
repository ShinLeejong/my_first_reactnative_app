import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../views/home";
import ReviewDetails from "../views/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "ReviewDetails",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default createAppContainer(HomeStack);
