import React from 'react'
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import icons from "../../constants/icons";
import {COLORS, FONTS, MARGINS} from "../../constants";

const RadioButton = (props) => {

    const selectedColor = props.isSelected ? COLORS.secondary : COLORS.red2

    function highlightStyle() {
        if (props.isSelected) {
            return styles.selected
        }
    }

    return (
        <TouchableOpacity style={[styles.btn, highlightStyle(props.isSelected), props.style]} onPress={props.onPress}>
            <Image source={props.isSelected ? icons.circleFilled : icons.circleEmpty}
                   style={{
                       width: 18,
                       height: 18,
                       tintColor: selectedColor
                   }}
            />
            <Text style={[FONTS.body2, {marginLeft: 8, color: selectedColor}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 14,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    selected: {
        backgroundColor: COLORS.primary,
        borderWidth: 0
    },
})

export default RadioButton
