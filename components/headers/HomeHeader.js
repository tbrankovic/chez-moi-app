import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {FONTS} from "../../constants/theme";
import images from "../../constants/images";

export class HomeHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={appTheme.FONTS.largeTitle}>Accueil</Text>
                <TouchableOpacity style={styles.redRounded}>
                    <Text style={appTheme.FONTS.body3}>Connexion/inscription</Text>
                </TouchableOpacity>
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
    }
})
