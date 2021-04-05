import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {DefaultBackHeader} from "../components/headers/DefaultBackHeader";

function reserve() {

}
const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DefaultBackHeader title="Connexion" navigation={navigation} />
            <Text style={[FONTS.body1, {color: COLORS.secondary, marginTop: 32}]}>Reconnectez-vous pour avoir accès à tous les plats délicieux du réseau.</Text>
            <View>
                <Text style={[FONTS.body1, {color: COLORS.dark5}]}>Vous recevrez un lien dans votre boîte mail qui vous connectera sans mot de passe.</Text>
                <TouchableOpacity style={styles.btnPrimary} onPress={reserve}>
                    <Text style={[FONTS.body1, {justifyContent: 'center'}]}>Envoyer le lien de connexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.dark2
    },
    roundImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        alignSelf: 'center',
        margin: 8
    },
    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.primary
    }
})

const textStyles =  StyleSheet.create({
    header: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    subheader: {
        color: 'red',
        marginTop: 8
    }
})

export default Login;
