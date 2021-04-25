import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {SmallInput} from "../components/atoms/SmallInput";
import {InfoSection} from "../components/molecules/InfoSection";
import {BuyTokensCell} from "../components/cells/BuyTokensCell";
import {BaseAccountCell} from "../components/cells/BaseAccountCell";
import {ManageFavoritesCell} from "../components/cells/ManageFavoritesCell";

const Account = () => {
    return (
        <View style={styles.container}>
            <Text style={FONTS.largeTitle}>Compte</Text>
            <Text style={[FONTS.body2, {color: COLORS.grey4}]}>trbr60645@eleve.isep.fr</Text>
            <InfoSection title="Nom d'utilisateur" placeholder="Nicolas"/>
            <InfoSection title="Adresse" placeholder="1 rue de Rivoli, Paris 75001"/>
            <Text style={[FONTS.body2, styles.subheader]}>Porte feuille</Text>
            <Text style={[FONTS.body2, {color: COLORS.grey4}]}>9 jetons</Text>
            <BuyTokensCell title="Acheter 5 jetons" price="4.99"/>
            <BuyTokensCell title="Acheter 10 jetons" price="7.99"/>
            <Text style={[FONTS.body2, styles.subheader]}>Favoris</Text>
            <ManageFavoritesCell />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    },
    subheader: {
        color: 'red',
        marginTop: 8
    }

})

export default Account;
