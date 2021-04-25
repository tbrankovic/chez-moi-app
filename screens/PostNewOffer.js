import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Button, ScrollView} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {DetailsHeader} from "../components/headers/DetailsHeader";
import {SmallInput} from "../components/atoms/SmallInput";
import RoundTabButton from "../components/atoms/RoundTabButton";
import NewOfferCell from "../components/cells/NewOfferCell";
import NewOfferForm from "../components/organisms/NewOfferForm";
import NameFormSection from "../components/molecules/NameFormSection";
import DetailsPageHeader from "../components/organisms/DetailsPageHeader";

const PostNewOffer = ({navigation}) => {
    return (
        <View style={styles.container}>
            <DetailsPageHeader title="Nouveau plat" navigation={navigation} />



            <NewOfferForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    },
    bar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default PostNewOffer;
