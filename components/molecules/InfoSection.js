import React, { useState }  from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import {COLORS, FONTS} from "../../constants";
import {SmallInput} from "../SmallInput";

export const InfoSection = ({name}) => {
    return (
        <View>
            <Text style={[FONTS.body3, styles.info]}>{name}</Text>
            <SmallInput placeholder={props.placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        color: 'red',
        marginTop: 8
    }
})
