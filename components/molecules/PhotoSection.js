import React from 'react'
import {TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {RoundedImage} from "../atoms";
import {COLORS, icons} from "../../constants";

const PhotoSection = (props) => {
    return (
        <View style={[ styles.container, props.style ]}>
            <View style={styles.round}>
                <Image source={icons.camera} style={{width: 150, height: 150, tintColor: COLORS.grey4}}/>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    round: {
        width: 300,
        height: 300,
        padding: 24,
        borderRadius: 150,
        backgroundColor: COLORS.grey3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PhotoSection
