import React from 'react';
import {TouchableOpacity, Text} from "react-native";

const RoundedButton = ({title, onPress, backgroundColor}) => (
    <TouchableOpacity onPress={onPress} style={{
        backgroundColor: {backgroundColor},
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 99
    }}>
        <Text>{title}</Text>
    </TouchableOpacity>
)

export default RoundedButton
