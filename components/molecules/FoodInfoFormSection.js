import React from 'react'
import {View, StyleSheet, Text} from "react-native";
import LargeInput from "../atoms/LargeInput";
import {FONTS, MARGINS} from "../../constants";
import Stepper from "../atoms/Stepper";

const FoodInfoFormSection = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            <LargeInput placeholder="Portion (ex : assiette, tranche)"/>
            <View style={MARGINS.mt16}>
                <Text style={[styles.text, FONTS.body2 ]}>Quantité</Text>
                <Stepper style={MARGINS.mt8}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center'
    }
})

export default FoodInfoFormSection
