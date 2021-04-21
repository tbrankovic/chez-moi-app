import React from 'react'
import { Image } from 'react-native'

const RoundedImage = (props) => (
    <Image source={props.source} style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size * 0.5,
        alignSelf: 'center'
    }}
    />
)

export default  RoundedImage
