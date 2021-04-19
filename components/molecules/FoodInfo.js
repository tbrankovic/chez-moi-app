import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { RoundedImage } from '../atoms';
import { FONTS, MARGINS } from "../../constants";

const FoodInfo = ({image, name, portion, ingredients}) => (
    <View>
        <RoundedImage source={image} size={250} />
        <Text style={ FONTS.h1BoldPrimary }>{name}</Text>
        <Text style={[ FONTS.body3, MARGINS.mt8 ]}>{portion}</Text>
        <Text style={[ FONTS.body3Grey, MARGINS.mt8 ]}>{ingredients}</Text>
    </View>
)

export default FoodInfo;
