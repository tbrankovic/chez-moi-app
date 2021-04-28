import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import {COLORS, FONTS, MARGINS} from '../constants'
import BigRedButton from "../components/atoms/BigRedButton";
import FoodInfo from "../components/molecules/FoodInfo";
import DetailsPageHeader from "../components/organisms/DetailsPageHeader";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import TimeSlider from "../components/atoms/TimeSilder";

const endTime = 22
const startTime = () => {
    let hours = new Date().getHours()
    let mins = new Date().getMinutes()
    let roundedMins = Math.ceil(mins / 15) / 4

    return hours + roundedMins
}

const Details = ({route, navigation}) => {
    const [sliderValue, setSliderValue] = useState(startTime())

    const sliderValueChange = (values) => setSliderValue(values)

    const decimalToTimeString = (d) => {
        let hours = Math.floor(d/1)
        let mins = d % 1 * 60

        return hours.toString() + "h" + mins.toLocaleString('en-US', {minimumIntegerDigits: 2})
    }

    const reserve = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <DetailsPageHeader title={'Chez ' + route.params.name}
                               username={route.params.name}
                               navigation={navigation} />

            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.scroll}>
                        <FoodInfo image={route.params.source}
                                  name={route.params.food}
                                  portion={route.params.portion}
                                  ingredients={'Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper'}
                        />

                        <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Heure de réservation</Text>
                        <View style={[ styles.horizontalView ]}>
                            <Text style={[ FONTS.h4, {marginRight: 16, width: 70}]}>{decimalToTimeString(sliderValue)}</Text>
                            <TimeSlider onValuesChange={sliderValueChange}
                                        min={startTime()}
                                        max={endTime}
                                        sliderLength={150}
                            />
                        </View>

                        <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Modalité</Text>
                        <SegmentedControl
                            values={['Sur place', 'À emporter']}
                            selectedIndex={0}
                            appearance='dark'
                            fontStyle={FONTS.body3}
                            style={[ MARGINS.mt8, MARGINS.mb32, {width: 250} ]}
                        />

                </ScrollView>
            </KeyboardAvoidingView>
            <BigRedButton onPress={reserve}
                          title='Réserver (1 jeton)'
                          style={{
                              position: 'absolute',
                              bottom: 116,
                              alignSelf: 'center'
                          }}/>
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

export default Details;
