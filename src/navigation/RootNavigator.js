import { createStackNavigator } from "react-navigation";
import React from 'React';
import HomeScreen from "../screens/HomeScreen";

export const RootNavigator = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: 'Home',
    }
);