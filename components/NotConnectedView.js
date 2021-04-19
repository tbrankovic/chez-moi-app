import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS, SIZES} from "../constants/theme";
import images from "../constants/images";

export class NotConnectedView extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.megaTitle}>:(</Text>
                        <Text style={styles.info}>Vous n'êtes pas encore connecté(e)</Text>
                        <TouchableOpacity style={styles.btnPrimary} title="Réserver">
                            <Text style={[FONTS.body1, {justifyContent: 'center'}]}>Connexion/Inscription</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    megaTitle: {
        fontSize: 100,
        color: COLORS.grey3
    },
    info: {
        color: COLORS.grey5
    },
    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.primary
    }
});
