import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";
import icons from "../../constants/icons";

export const ManageFavoritesCell = (props) => {
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity
                style={[styles.cell, styles.shadowInner]}
                onPress={() => this.props.navigation.navigate('Home')}
            >
                <Text style={FONTS.h4reg}>Gérer mes favoris</Text>
                <Image source={icons.rightArrow} style={{tintColor: COLORS.grey3, width: 18, height: 18}}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        marginTop: 12,
        padding: 14,
        paddingLeft: 16,
        backgroundColor: appTheme.COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    shadowInner: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,

        elevation: 3,
    },
});
