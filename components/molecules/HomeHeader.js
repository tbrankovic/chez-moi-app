import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {FONTS} from "../../constants/theme";
import AppContext from "../AppContext";
import HeaderStateButton from "./HeaderStateButton";

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={ FONTS.largeTitle }>Accueil</Text>
            <HeaderStateButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})

export default HomeHeader
