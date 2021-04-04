import React, {useContext} from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {FONTS} from "../../constants/theme";
import images from "../../constants/images";
import AppContext from "../AppContext";

const HomeHeader = () => {
    const context = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={appTheme.FONTS.largeTitle}>Accueil</Text>
            {context.loggedIn ?
                <TouchableOpacity style={styles.redRounded}>
                    <Text style={appTheme.FONTS.body3}>Connexion/inscription</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.greyRounded}>
                    <Text style={appTheme.FONTS.body3}>10 jetons</Text>
                </TouchableOpacity>
            }
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
    },
    redRounded: {
        backgroundColor: appTheme.COLORS.red1,
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 99
    },
    greyRounded: {
        backgroundColor: appTheme.COLORS.dark1,
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 99
    }
})

export default HomeHeader
