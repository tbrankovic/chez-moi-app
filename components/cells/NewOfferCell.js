import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";

const NewOfferCell = (props) => {
    return (
        <View style={[ props.style, {width: '100%'} ]}>
            <TouchableOpacity
                style={styles.cell}
                onPress={() => props.navigation.navigate('PostNewOffer')}
            >
                <Text style={[ FONTS.body1 ]}>+ Ajouter un nouveau plat</Text>
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
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
});

export default NewOfferCell
