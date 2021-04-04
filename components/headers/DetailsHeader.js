import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {FONTS} from "../../constants/theme";
import images from "../../constants/images";
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
                <Text style={[appTheme.FONTS.smallTitle, {alignSelf: 'center'}]}>Chez Mark</Text>
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
    },
    redRounded: {
        backgroundColor: appTheme.COLORS.red1,
        padding: 8,
        borderRadius: 99
    },
})
