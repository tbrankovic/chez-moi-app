import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import {COLORS} from "../../constants";

const RoundedButton = ({title, onPress, backgroundColor}) => (
    <TouchableOpacity onPress={onPress} style={{
        backgroundColor: backgroundColor,
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 99
    }}>
        <Text style={{color: COLORS.secondary}}>{title}</Text>
    </TouchableOpacity>
)

export default RoundedButton
