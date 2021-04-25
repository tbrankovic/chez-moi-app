import React from 'react'
import {View, StyleSheet} from "react-native";
import LargeInput from "../atoms/LargeInput";
import {MARGINS} from "../../constants";

const FoodInfoFormSection = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            <LargeInput placeholder="Portion (ex : assiette, tranche)"/>
            <LargeInput placeholder="Quantité" keyboardType="numeric" style={MARGINS.mt16}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})

export default FoodInfoFormSection
