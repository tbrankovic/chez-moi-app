import React, { useState }  from 'react';
import { TextInput, StyleSheet } from "react-native";
import {COLORS, FONTS} from "../constants";

export const SmallInput = (props) => {
    const [text, onChangeText] = React.useState(null);

    return (
        <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.dark5}
            style={[FONTS.body2, styles.input, styles.shadow]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 150,
        height: 32,
        backgroundColor: COLORS.dark3,
        borderRadius: 6,
        color: COLORS.secondary,
        textAlign: 'center',
        marginTop: 8
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14,

        elevation: 5,
    }
})
