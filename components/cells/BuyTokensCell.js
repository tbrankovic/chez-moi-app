import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";
import {BaseAccountCell} from "./BaseAccountCell";

export const BuyTokensCell = (props) => {
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity
                style={[styles.cell, styles.shadowInner]}
                onPress={() => this.props.navigation.navigate('Home')}
            >
                <Text style={FONTS.h4reg}>{props.title}</Text>
                <View style={[styles.priceTag, styles.shadowInner]}>
                    <Text style={[FONTS.h4reg, {color: 'red'}]}>{props.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mtb4: {
        marginTop: 8,
        marginBottom: 8
    },
    mtb8: {
        marginTop: 8,
        marginBottom: 8
    },
    infoContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        marginLeft: 8
    },
    cell: {
        marginTop: 12,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: appTheme.COLORS.dark1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    priceTag: {
        backgroundColor: COLORS.dark2,
        borderRadius: 12,
        padding: 6,
        paddingLeft: 20,
        paddingRight: 20
    },
    shadowOuter: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14,

        elevation: 5,
    },
    shadowInner: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,

        elevation: 3,
    },
});
