import React from 'react';
import { View, Image } from 'react-native';
import {createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import {Home, Offers, Reservations, Account } from '../screens';
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: COLORS.primary,
            inactiveTintColor: COLORS.secondary,
            backgroundColor: COLORS.dark1,
            style: {
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.dark1
            }
        }}>
            <Tab.Screen name="Acceuil"
                        component={Home}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={icons.home}
                                       resizeMode="Contain"
                                       style={{
                                           width: 25,
                                           height: 25,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary
                                       }}/>
                            )
                        }}
            />
            <Tab.Screen name="Offres"
                        component={Offers}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={icons.tray}
                                       resizeMode="Contain"
                                       style={{
                                           width: 25,
                                           height: 25,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary
                                       }}/>
                            )
                        }}
            />
            <Tab.Screen name="Réservations"
                        component={Reservations}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={icons.reception}
                                       resizeMode="Contain"
                                       style={{
                                           width: 25,
                                           height: 25,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary
                                       }}/>
                            )
                        }}
            />
            <Tab.Screen name="Compte"
                        component={Account}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <Image source={icons.user}
                                       resizeMode="Contain"
                                       style={{
                                           width: 25,
                                           height: 25,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary
                                       }}/>
                            )
                        }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
