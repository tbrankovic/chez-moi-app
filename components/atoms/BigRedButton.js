import React from 'react'
import { TouchableOpacity, Text} from 'react-native';
import { COLORS, FONTS } from "../../constants";

const BigRedButton = ({title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 14,
        backgroundColor: COLORS.primary
    }}>
        <Text style={[FONTS.body1, {justifyContent: 'center'}]}>{title}</Text>
    </TouchableOpacity>
)

export default BigRedButton;
