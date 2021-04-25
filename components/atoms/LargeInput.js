import React, { useState }  from 'react';
import { TextInput, StyleSheet } from "react-native";
import {COLORS, FONTS} from "../../constants";

const LargeInput = (props) => {
    const [text, onChangeText] = React.useState(null);

    return (
        <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.grey5}
            multiline={props.multiline || false}
            keyboardType={props.keyboardType || 'default'}
            style={[props.style,
                    FONTS.body2,
                    styles.input,
                    styles.shadow,
                    {
                        height: props.multiline ? 117 : 55
                    }]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: COLORS.grey3,
        borderRadius: 6,
        color: COLORS.secondary,
        padding: 12
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 14,

        elevation: 5,
    }
})

export default LargeInput
