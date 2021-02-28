import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs';
import { COLORS, icons } from './constants'
import { Home, Offers, Reservations, Account } from './screens';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: COLORS.dark2 } }}
                             initialRouteName = { "Home" }
            >
                <Stack.Screen name="Home" component={ Tabs } />
                <Stack.Screen name="Offers" component={ Offers } />
                <Stack.Screen name="Reservations" component={ Reservations } />
                <Stack.Screen name="Account" component={ Account } />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
