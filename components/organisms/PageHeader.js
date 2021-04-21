import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {FONTS} from "../../constants";
import HeaderStateButton from "../molecules/HeaderStateButton";

const PageHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={ FONTS.largeTitle }>{props.title}</Text>
            <HeaderStateButton navigation={props.navigation} />
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

export default PageHeader;
