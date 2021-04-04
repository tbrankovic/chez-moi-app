import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { OfferCell } from "../components/OfferCell";
import {useNavigation} from "@react-navigation/core";

const testData = require('../test/data.json');

const Offers = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={FONTS.largeTitle}>Offres</Text>
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
        backgroundColor: COLORS.dark1
    }
})

export default Offers;
