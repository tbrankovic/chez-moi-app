import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS, FONTS, MARGINS} from "../../constants";
import images from "../../constants/images";
import {RoundedImage} from "../atoms";

const OfferCell =(props) => {
    return (
        <View style={[ props.style, {width: '100%'} ]}>
            <TouchableOpacity
                style={styles.cell}
                onPress={() => props.navigation.navigate('ModifyOffer', {name: 'moi'})}
            >
                <RoundedImage source={images.pizzaSlice} size={92} />

                <View style={{marginLeft: 8}}>
                    <Text style={ FONTS.h4 }>Lasagne</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>2 plats restants</Text>
                    <Text style={ FONTS.body3Grey }>3 plats vendus</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>10h00-18h00</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        padding: 16,
        backgroundColor: COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});

export default OfferCell
