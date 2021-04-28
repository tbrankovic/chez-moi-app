import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {COLORS, FONTS} from "../../constants";

const Stepper = (props) => {
    const [count, setCount] = useState(1)

    const countChange = (value) => setCount(value)


    return (
        <View style={[ styles.container, props.style ]}>
            <TouchableOpacity disabled={count <= 1}
                              onPress={() => count > 1 ? countChange(count - 1) : null}
                              style={styles.stepBtn}
            >
                <Text style={FONTS.body1}>–</Text>
            </TouchableOpacity>
            <Text style={[FONTS.body1, styles.text]}>{count}</Text>
            <TouchableOpacity style={styles.stepBtn} onPress={() => countChange(count + 1)}>
                <Text style={FONTS.body1}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: COLORS.grey3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 14,

        elevation: 5
    },
    text: {
        width: 22,
        marginLeft: 8,
        marginRight: 8,
        textAlign:'center'
    }
})

export default Stepper
