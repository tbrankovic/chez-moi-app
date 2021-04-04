import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/Tabs';
import { COLORS, icons } from './constants'
import AppContext from "./components/AppContext";

const Stack = createStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleIsLoggedIn = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
    }

    const userSettings = {
        loggedIn: isLoggedIn,
        setIsLoggedIn,
        toggleIsLoggedIn,
    };
    return (
        <AppContext.Provider value={userSettings}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" />
                <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.dark2 } }}
                                 initialRouteName = { "Tabs" }
                >
                    <Stack.Screen name="Tabs" component={ Tabs } />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}
