import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

import appTheme, {COLORS} from "../constants/theme";
import images from "../constants/images";

export function Header(prop) {
    return (
        <View style={styles.headerContainer}>
            <Text>Chez Mark</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    roundImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        overflow: 'hidden',
        marginTop: 8,
        marginBottom: 8,
    }
});
