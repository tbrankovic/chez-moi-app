import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
import { COLORS, FONTS, MARGINS } from "../../constants";
import { RoundedImage } from "../atoms";

const FoodCard = ({username, image, food, portion, distance}) => (
    <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Details', {name: this.props.username})}
        style={styles.card}
    >
        <Text style={ FONTS.smallTitle }>Chez {username}</Text>
        <RoundedImage source={image} size={130} />

        <View style={ styles.infoContainer }>
            <Text style={[ FONTS.h4, MARGINS.mb4 ]}>{food}</Text>
            <Text style={[ FONTS.body3, MARGINS.mb4 ]}>{portion}</Text>
            <Text style={ FONTS.body5 }>{distance}</Text>
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
        width: (Dimensions.get('window').width - 3 * 8) / 2,
    }
});

export default FoodCard;
