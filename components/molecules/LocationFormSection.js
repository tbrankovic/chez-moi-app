import React from 'react'
import {View, StyleSheet, Dimensions} from "react-native";
import LargeInput from "../atoms/LargeInput";
import {MARGINS} from "../../constants";

const LocationFormSection = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            <LargeInput placeholder="Adresse"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})

export default LocationFormSection
