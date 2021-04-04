import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

function reserve() {

}
const Details = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.roundImage} source={images.pizzaSlice} />
            <Text style={[FONTS.h1, textStyles.header]}>Pates</Text>
            <Text style={[FONTS.body3, {marginTop: 8}]}>Assiette</Text>
            <Text style={[FONTS.body3, {color: COLORS.dark5, marginTop: 8}]}>Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper ad eum, no brute nostro mei.</Text>
            <Text style={[FONTS.body3, textStyles.subheader]}>Heure de réservation</Text>
            <Text style={[FONTS.body3, textStyles.subheader]}>Modalité</Text>
            <SegmentedControl
                values={['One', 'Two']}
                selectedIndex={this.state.selectedIndex}
                onPress={this.state.bind(this)}
                onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                }}
            />
            <TouchableOpacity style={styles.btnPrimary} title="Réserver" onPress={reserve}>
                <Text style={[FONTS.body1, {justifyContent: 'center'}]}>Réserver</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.dark2
    },
    roundImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        alignSelf: 'center',
        margin: 8
    },
    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.primary
    }
})

const textStyles =  StyleSheet.create({
    header: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    subheader: {
        color: 'red',
        marginTop: 8
    }
})

export default Details;
