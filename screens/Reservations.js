import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {ReservationHeader} from "../components/headers/ReservationHeader";
import PageHeader from "../components/organisms/PageHeader";

const Reservations = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Réservations" />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey1
    }
})

export default Reservations;
