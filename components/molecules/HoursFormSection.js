import React, {useState} from 'react'
import TimeSlider from "../atoms/TimeSilder";
import {StyleSheet, Text, View} from "react-native";
import {FONTS, MARGINS} from "../../constants";

const endTime = 22
const startTime = () => {
    let hours = new Date().getHours()
    let mins = new Date().getMinutes()
    let roundedMins = Math.ceil(mins / 15) / 4

    return hours + roundedMins
}

const HoursFormSection = (props) => {
    const [sliderValue, setSliderValue] = useState([startTime(), endTime])

    const sliderValueChange = (values) => setSliderValue(values)

    const decimalToTimeString = (d) => {
        let hours = Math.floor(d/1)
        let mins = d % 1 * 60

        return hours.toString() + "h" + mins.toLocaleString('en-US', {minimumIntegerDigits: 2})
    }

    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.info}>
                <Text style={ FONTS.body1 }>Ouverture</Text>
                <Text style={FONTS.h4}>{decimalToTimeString(sliderValue[0])}</Text>
            </View>
            <View style={[ styles.info, MARGINS.mb8 ]}>
                <Text style={ FONTS.body1 }>Fermeture {'\t'}</Text>
                <Text style={FONTS.h4}>{decimalToTimeString(sliderValue[1])}</Text>
            </View>

            <TimeSlider values={[sliderValue[0], sliderValue[1]]}
                        onValuesChange={sliderValueChange}
                        min={startTime()}
                        max={endTime}
                        sliderLength={250}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250
    }
})

export default HoursFormSection
