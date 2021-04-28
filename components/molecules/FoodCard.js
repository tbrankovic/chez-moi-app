import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
import { COLORS, FONTS, MARGINS } from "../../constants";
import { RoundedImage } from "../atoms";

const FoodCard = (props) => (
    <TouchableOpacity
        onPress={() => props.navigation.navigate('Details', {
            name: props.username,
            source: props.imageSource,
            food: props.food,
            portion: props.portion
        })}
        style={styles.card}
    >
        <Text style={[ FONTS.smallTitle, MARGINS.mb8 ]}>Chez {props.username}</Text>
        <RoundedImage source={props.imageSource} size={130} />

        <View style={ styles.infoContainer }>
            <Text style={[ FONTS.h4, MARGINS.mt4 ]}>{props.food}</Text>
            <Text style={[ FONTS.body3, MARGINS.mt4 ]}>{props.portion}</Text>
            <Text style={[ FONTS.body5Grey, MARGINS.mt4 ]}>{props.distance} km</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0,
        justifyContent: 'flex-start',
        width: '100%',
    },
    card: {
        marginTop: 12,
        padding: 16,
        backgroundColor: COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        width: (Dimensions.get('window').width - 3 * 16) / 2,
    }
});

export default FoodCard;
