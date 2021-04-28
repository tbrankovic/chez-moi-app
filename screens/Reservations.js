import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, MARGINS} from '../constants'
import {ReservationHeader} from "../components/headers/ReservationHeader";
import PageHeader from "../components/organisms/PageHeader";
import ReservationCell from "../components/molecules/ReservationCell";

const Reservations = ({navigation}) => {
    return (
        <View style={styles.container}>
            <PageHeader title="Réservations" />

            <Text style={FONTS.body5Grey}>ACTIFS</Text>
            <ReservationCell navigation={navigation} style={MARGINS.mt8} />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    }
})

export default Reservations;
