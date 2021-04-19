import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";

export class OfferCell extends React.Component {
    render() {
        return (
            <View style={{width: '100%'}}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => this.props.navigation.navigate('Details', {name: this.props.username})}
                >
                    <Image source={images.pasta} style={styles.roundImage}/>
                    <View style={styles.infoContainer}>
                        <Text style={[FONTS.h4, {color: COLORS.secondary}]}>Lasagne</Text>
                        <Text style={[FONTS.body3, {color: COLORS.grey5, marginTop: 4}]}>2 plats restants</Text>
                        <Text style={[FONTS.body3, {color: COLORS.grey5}]}>3 plats vendus</Text>
                        <Text style={[FONTS.body3, {color: COLORS.grey5, marginTop: 4}]}>10h00-18h00</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
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
        justifyContent: 'flex-start',
        width: '100%',
        marginLeft: 8
    },
    cell: {
        marginTop: 12,
        padding: 16,
        backgroundColor: appTheme.COLORS.grey1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
    },
    roundImage: {
        width: 92,
        height: 92,
        borderRadius: 46,
        overflow: 'hidden',
    }
});
