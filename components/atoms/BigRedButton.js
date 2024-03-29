import React from 'react'
import { TouchableOpacity, Text} from 'react-native';
import { COLORS, FONTS } from "../../constants";

const BigRedButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={[{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 14,
        backgroundColor: COLORS.primary
    },  props.style
    ]}>
        <Text style={[FONTS.body1, {justifyContent: 'center'}]}>{props.title}</Text>
    </TouchableOpacity>
)

export default BigRedButton;
