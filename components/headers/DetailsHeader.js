import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FONTS } from "../../constants";
import icons from "../../constants/icons";

export class DetailsHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={icons.leftArrow} style={{
                        width: 28,
                        height: 28,
                    }}/>
                </TouchableOpacity>
                <Text style={[FONTS.smallTitle, {alignSelf: 'center'}]}>Chez Mark</Text>
                <View style={{width: 28, height: 28}}/>
            </View>
        )
    }
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
