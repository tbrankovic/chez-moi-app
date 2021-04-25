import React from 'react'
import {View, StyleSheet, Dimensions} from "react-native";
import LargeInput from "../atoms/LargeInput";
import {MARGINS} from "../../constants";

const NameFormSection = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            <LargeInput placeholder="Nom du plat"/>
            <LargeInput placeholder="Ingrédients"
                        multiline={true}
                        style={MARGINS.mt16}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})

export default NameFormSection
