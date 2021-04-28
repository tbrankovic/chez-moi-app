import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS, FONTS, MARGINS} from "../../constants";
import images from "../../constants/images";
import {RoundedImage} from "../atoms";

const ReservationCell =(props) => {
    return (
        <View style={[ props.style, {width: '100%'} ]}>
            <TouchableOpacity
                style={styles.cell}
                onPress={() => props.navigation.navigate('ReservationDetails',
                    {
                        name: "Chloe",
                        source: images.quiche,
                        food: "Quiche lorraine",
                        portion: "tranche"
                    })}
            >
                <RoundedImage source={images.quiche} size={92} />

                <View style={{marginLeft: 8}}>
                    <Text style={ FONTS.h4 }>Quiche lorraine</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>Chez Chloe</Text>
                    <Text style={ FONTS.body3Grey }>Sur place</Text>
                    <Text style={[ FONTS.body3Grey, MARGINS.mt4 ]}>20h30</Text>
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

export default ReservationCell
