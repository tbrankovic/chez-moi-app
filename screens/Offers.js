import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { OfferCell } from "../components/OfferCell";
import {useNavigation} from "@react-navigation/core";
import {OffersHeader} from "../components/headers/OffersHeader";
import AppContext from "../components/AppContext";
import {NotConnectedView} from "../components/NotConnectedView";

const testData = require('../test/data.json');

const Offers = () => {

    const navigation = useNavigation();
    const context = useContext(AppContext);

    return (
        <View style={styles.container}>
            <OffersHeader/>
            {context.loggedIn ?
                <View>
                    <Text style={FONTS.body5}>ACTIFS</Text>
                    <OfferCell
                        username="Username"
                        foodname="Lasagna"
                        navigation={navigation}/>
                    <Text style={[FONTS.body5, {marginTop: 8}]}>ARCHIVÉS</Text>

                </View> :
                <NotConnectedView/>
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.dark2
    },
})

export default Offers;
