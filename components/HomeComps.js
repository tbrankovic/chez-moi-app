import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

import appTheme from "../constants/theme";
import images from "../constants/images";

export function Custom1Card(prop) {
    return (
        <View>
            <TouchableOpacity
                style={styles.card}
//                onPress={() => { navigation.navigate('Détails', {name: member.name, image: member.image})} }
            >
                <Text style={appTheme.FONTS.smallTitle}>Chez {prop.username}</Text>
                <Image source={images.pasta} style={styles.roundImage} />
                <View style={styles.infoContainer}>
                    <Text style={[appTheme.FONTS.h4, {marginBottom: 4}, {float: 'left'}]}>{prop.foodname}</Text>
                    <Text style={[appTheme.FONTS.body3, {marginBottom: 4}]}>Assiette</Text>
                    <Text style={appTheme.FONTS.body5}>2,3 km</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mtb4: {
        marginTop: 8,
        marginBottom: 8
    },
    mtb8: {
        marginTop: 8,
        marginBottom: 8
    },
    infoContainer: {
        flex: 0,
        justifyContent: 'flex-start',
        width: '100%',
    },
    card: {
        marginTop: 12,
        padding: 16,
        backgroundColor: appTheme.COLORS.dark1,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        width: (Dimensions.get('window').width - 3 * appTheme.SIZES.spacing2) / 2,
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
