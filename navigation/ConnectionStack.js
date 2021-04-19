import React from 'react';
import { Image } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { Login, SignUp } from '../screens';
import { leftArrow } from "../constants/icons";
import { COLORS, FONTS } from "../constants";

const Stack = createStackNavigator();

export function ConnectionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.grey2,
                    shadowColor: 'transparent'
                },
                headerShown: false,
                headerBackTitleVisible: false,
                headerBackImage: () =>
                    <Image source={ leftArrow }
                           style={{
                               width: 28,
                               height: 28,
                               marginLeft: 12
                           }}
                    />,
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontFamily: "Bodoni 72",
                    fontSize: 26,
                }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}
