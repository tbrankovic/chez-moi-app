import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const Reservations = () => {
    return (
        <View style={styles.container}>
            <Text style={FONTS.largeTitle}>Réservations</Text>
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

export default Reservations;
