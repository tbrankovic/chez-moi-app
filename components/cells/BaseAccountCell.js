import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";

export const BaseAccountCell = (props) => {
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity
                style={[styles.cell, styles.shadow]}
                onPress={() => this.props.navigation.navigate('Home')}
            >
                <Text style={FONTS.h4reg}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        marginTop: 12,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: appTheme.COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    shadow: {
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
