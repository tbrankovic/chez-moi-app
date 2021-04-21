import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Button, ScrollView} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, MARGINS} from '../constants'
import {DetailsHeader} from "../components/headers/DetailsHeader";
import {SmallInput} from "../components/SmallInput";
import BigRedButton from "../components/atoms/BigRedButton";
import RoundedImage from "../components/atoms/RoundedImage";
import FoodInfo from "../components/molecules/FoodInfo";
import DetailsPageHeader from "../components/organisms/DetailsPageHeader";

function reserve() {

}
const Details = ({route, navigation}) => {

    return (
        <View style={styles.container}>
            <DetailsPageHeader username={route.params.name} navigation={navigation} />
            <ScrollView>
                <FoodInfo image={images.pizzaSlice}
                          name={'Pates'}
                          portion={'Assiette'}
                          ingredients={'Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper'}
                />

                <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Heure de réservation</Text>
                <SmallInput placeholder="18h00" />

                <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Modalité</Text>
                <Text style={FONTS.body5}>N/A</Text>

                <BigRedButton onPress={reserve} title='Réserver' />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    }
})

export default Details;
