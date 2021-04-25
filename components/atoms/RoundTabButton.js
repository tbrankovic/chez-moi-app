import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {COLORS, FONTS} from "../../constants";

const RoundTabButton = (props) => {
    function highlightStyle() {
        if (props.isSelected) {
            return styles.selected
        }
    }

    return (
        <TouchableOpacity style={[styles.btn, highlightStyle(props.isSelected), props.style]} onPress={props.onPress} >
            <Text style={ FONTS.body1 }>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: 45,
        height: 45,
        backgroundColor: COLORS.grey3,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: COLORS.primary,
    }
})

export default RoundTabButton
