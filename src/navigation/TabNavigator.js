import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BollywoodMovies from '../screens/BollywoodMovies'
import HollywoodMovies from "../screens/HollywoodMovies";

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator initialRouteName="Hollywood">
            <Tab.Screen name="Hollywood" component={HollywoodMovies} options={{ headerShown: false }} />
            <Tab.Screen name="Bollywood" component={BollywoodMovies} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
