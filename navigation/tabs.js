import React from 'react';
import { View, Image } from 'react-native';
import {createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import {Home, Offers, Reservations, Account } from '../screens';
import { COLORS, SIZES, icons } from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            activeTintColor: COLORS.primary,
            inactiveTintColor: COLORS.secondary,
            backgroundColor: COLORS.dark1,

            style: {
                width: SIZES.width - 32,
                height: 64,

                position: 'absolute',
                marginBottom: 34,
                left: '50%',
                marginLeft: SIZES.width / -2 + 16,

                backgroundColor: COLORS.dark1,
                borderRadius: SIZES.radius2,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
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
                                           marginTop: 24.5,
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
                                           marginTop: 24.5,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary,
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
                                           marginTop: 24.5,
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
                                           marginTop: 24.5,
                                           tintColor: focused ? COLORS.primary : COLORS.secondary
                                       }}/>
                            )
                        }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
