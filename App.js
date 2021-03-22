import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/Tabs';
import { COLORS, icons } from './constants'
import { Home, Offers, Reservations, Account, Details } from './screens';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.dark2 } }}
                             initialRouteName = { "Tabs" }
            >
                <Stack.Screen name="Tabs" component={ Tabs } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
