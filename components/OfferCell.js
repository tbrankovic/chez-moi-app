import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme from "../constants/theme";
import images from "../constants/images";

export class OfferCell extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => this.props.navigation.navigate('Details', {name: this.props.username})}
                >
                    <Image source={images.pasta} style={styles.roundImage}/>
                    <View style={styles.infoContainer}>
                        <Text>Lasagne</Text>
                        <Text>2 plats restants</Text>
                        <Text>3 plats vendus</Text>
                        <Text>10h00-18h00</Text>
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
    },
    cell: {
        marginTop: 12,
        padding: 16,
        backgroundColor: appTheme.COLORS.dark1,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        width: 300,
    },
    roundImage: {
        width: 92,
        height: 92,
        borderRadius: 46,
        overflow: 'hidden',
        margin: 8,
    }
});
