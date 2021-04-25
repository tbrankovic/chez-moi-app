import React, {useState} from 'react'
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {COLORS} from "../../constants";

const TimeSlider = (props) => {

    return (
        <MultiSlider values={props.values}
                     onValuesChange={props.onValuesChange}
                     sliderLength={250}
                     min={props.min}
                     max={props.max}
                     step={0.25}
                     trackStyle={{backgroundColor: COLORS.grey4}}
                     selectedStyle={{backgroundColor: COLORS.primary}}
        />
    )
}

export default TimeSlider
