import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const Details = () => {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
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

export default Details;
