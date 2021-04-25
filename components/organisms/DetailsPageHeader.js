import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {FONTS} from "../../constants";
import HeaderStateButton from "../molecules/HeaderStateButton";
import icons from "../../constants/icons";

const DetailsPageHeader = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image source={icons.leftArrow} style={{
                    width: 28,
                    height: 28,
                }}/>
            </TouchableOpacity>
            <Text style={[ FONTS.smallTitle, {alignSelf: 'center'} ]}>{props.title}</Text>
            <View style={{width: 28, height: 28}}/>
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

export default DetailsPageHeader;
