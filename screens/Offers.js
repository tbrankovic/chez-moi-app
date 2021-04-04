import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { OfferCell } from "../components/OfferCell";
import {useNavigation} from "@react-navigation/core";
import {OffersHeader} from "../components/headers/OffersHeader";

const testData = require('../test/data.json');

const Offers = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <OffersHeader />
            <OfferCell
                       username="Username"
                       foodname="Lasagna"
                       navigation={navigation} />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.dark2
    }
})

export default Offers;
