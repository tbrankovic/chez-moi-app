import React from 'react';
import { Image } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";

import {Home, Details, PostNewOffer, ModifyOffer, Offers} from '../screens';
import { leftArrow } from "../constants/icons";
import { COLORS, FONTS } from "../constants";

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator
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
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Details"
                              component={Details}
                              options={({ route }) => ({ title: 'Chez ' + route.params.name })}
            />
        </HomeStack.Navigator>
    )
}

export function OffersStackScreen() {
    return (
        <HomeStack.Navigator
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
            <HomeStack.Screen name="Offers" component={Offers} />
            <HomeStack.Screen name="ModifyOffer" component={ModifyOffer} />
            <HomeStack.Screen name="PostNewOffer"
                              component={PostNewOffer}
                              options={({ route }) => ({ title: 'Nouveau plat' })}
            />
        </HomeStack.Navigator>
    )
}
