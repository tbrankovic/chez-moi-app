import React from 'react';
import { Image } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";

import { Home, Offers, Reservations, Account, Details } from '../screens';
import { leftArrow } from "../constants/icons";
import { COLORS, FONTS } from "../constants";

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.dark2,
                    shadowColor: 'transparent'
                },
                headerShown: true,
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
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Details"
                              component={Details}
                              options={({ route }) => ({ title: 'Chez ' + route.params.name })}
            />
        </HomeStack.Navigator>
    )
}
