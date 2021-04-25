import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS, MARGINS} from "../../constants/theme";
import images from "../../constants/images";
import {RoundedImage} from "../atoms";

const ArchivedOfferCell = (props) => {
    return (
        <View style={[ props.style, {width: '100%'} ]}>
            <TouchableOpacity
                style={styles.cell}
                onPress={() => props.navigation.navigate('Details', {name: 'moi'})}
            >
                <RoundedImage source={images.pizzaSlice} size={92} />

                <View style={{marginLeft: 8, alignSelf: 'flex-start'}}>
                    <Text style={[ FONTS.h4 ]}>Pates</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>5 plats vendus</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>4/5 ont aimé</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[ FONTS.body4Grey, {textAlign: 'right'}]}>04/05/2021</Text>
                    <Text style={[FONTS.body1, {textAlign: 'right'}]}>+5 tokens</Text>
                    <Text style={[ FONTS.body4Grey, {textAlign: 'right', color: 'transparent'}]}>04/05/2021</Text>
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
        flex:1,
        height: 92,
        alignSelf: 'flex-start',
        justifyContent: 'space-between'
    },
    cell: {
        padding: 16,
        backgroundColor: appTheme.COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
    },
    date: {
        textAlign: 'right',
        justifyContent: 'flex-start'
    }
});

export default ArchivedOfferCell
