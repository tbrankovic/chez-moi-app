import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, MARGINS} from '../constants'
import OfferCell from "../components/molecules/OfferCell";
import {useNavigation} from "@react-navigation/core";
import {OffersHeader} from "../components/headers/OffersHeader";
import AppContext from "../components/AppContext";
import {NotConnectedView} from "../components/NotConnectedView";
import NewOfferCell from "../components/cells/NewOfferCell";
import ArchivedOfferCell from "../components/cells/ArchivedOfferCell";
import PageHeader from "../components/organisms/PageHeader";

const testData = require('../test/data.json');

const Offers = () => {

    const navigation = useNavigation();
    const context = useContext(AppContext);

    return (
        <View style={styles.container}>
            <PageHeader title="Mes plats" />
            {context.loggedIn ?
                <View>
                    <Text style={FONTS.body5Grey}>ACTIFS</Text>
                    <OfferCell
                        username="Username"
                        foodname="Lasagna"
                        navigation={navigation}
                        style={ MARGINS.mt8 } />
                    <NewOfferCell navigation={navigation} style={MARGINS.mt8} />

                    <Text style={[FONTS.body5Grey, MARGINS.mt8 ]}>ARCHIVÉS</Text>
                    <ArchivedOfferCell navigation={navigation} style={MARGINS.mt8} />
                </View> :
                <NotConnectedView/>
            }
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
})

export default Offers;
