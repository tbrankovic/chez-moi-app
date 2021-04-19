import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Button, ScrollView} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {DetailsHeader} from "../components/headers/DetailsHeader";
import {SmallInput} from "../components/SmallInput";

const PostNewOffer = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DetailsHeader navigation={navigation} />
            <ScrollView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    },
    roundImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        alignSelf: 'center',
        margin: 8
    },
    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.primary
    }
})

const textStyles =  StyleSheet.create({
    header: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    subheader: {
        color: 'red',
        marginTop: 8
    }
})

export default PostNewOffer;
