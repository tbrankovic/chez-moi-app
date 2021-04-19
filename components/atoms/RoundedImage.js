import React from 'react'
import { Image } from 'react-native'

const RoundedImage = ({source, size}) => (
    <Image source={source} style={{
        width: {size},
        height: {size},
        borderRadius: {size} * 0.5,
        alignSelf: 'center',
    }} />
)

export default  RoundedImage
