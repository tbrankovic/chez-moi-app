import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, MARGINS} from '../constants'
import BigRedButton from "../components/atoms/BigRedButton";
import FoodInfo from "../components/molecules/FoodInfo";
import DetailsPageHeader from "../components/organisms/DetailsPageHeader";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import TimeSlider from "../components/atoms/TimeSilder";

function reserve() {

}

const endTime = 22
const startTime = () => {
    let hours = new Date().getHours()
    let mins = new Date().getMinutes()
    let roundedMins = Math.ceil(mins / 15) / 4

    return hours + roundedMins
}

const ReservationDetails = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <DetailsPageHeader title={'Chez ' + route.params.name}
                               username={route.params.name}
                               navigation={navigation} />
            <ScrollView style={styles.scroll}>
                <FoodInfo image={images.quiche}
                          name={route.params.food}
                          portion={route.params.portion}
                          ingredients={'Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper'}
                />

                <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Heure de réservation</Text>
                <Text style={[ FONTS.body1, MARGINS.mt4 ]}>20h30</Text>

                <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Modalité</Text>
                <Text style={[ FONTS.body1, MARGINS.mt4 ]}>Sur place</Text>

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
    },
    scroll: {
        height: Dimensions.get('window').height - 60 - 214
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

})

export default ReservationDetails;
