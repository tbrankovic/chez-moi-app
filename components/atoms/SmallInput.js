import React, { useState }  from 'react';
import { TextInput, StyleSheet } from "react-native";
import {COLORS, FONTS} from "../../constants";

export const SmallInput = (props) => {
    const [text, onChangeText] = React.useState(null);

    return (
        <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.grey5}
            keyboardType={props.keyboardType || 'default'}
            style={[FONTS.body2, styles.input, styles.shadow, {width: 150}, props.style]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 32,
        backgroundColor: COLORS.grey3,
        borderRadius: 6,
        color: COLORS.secondary,
        textAlign: 'center',
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
