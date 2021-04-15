import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/Tabs';
import { COLORS, icons } from './constants'
import AppContext from "./components/AppContext";
import { useFonts, Rubik_400Regular, Rubik_700Bold } from "@expo-google-fonts/rubik";

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_700Bold
    })

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const toggleIsLoggedIn = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
    }

    const userSettings = {
        loggedIn: isLoggedIn,
        setIsLoggedIn,
        toggleIsLoggedIn,
    };

    if (!fontsLoaded) {
        return <ActivityIndicator />
    } else {
        return (
            <AppContext.Provider value={userSettings}>
                <NavigationContainer>
                    <StatusBar barStyle="light-content"/>
                    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: COLORS.dark2}}}
                                     initialRouteName={"Tabs"}
                    >
                        <Stack.Screen name="Tabs" component={Tabs}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </AppContext.Provider>
        );
    }
}
