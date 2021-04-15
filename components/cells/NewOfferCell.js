import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import appTheme, {COLORS, FONTS} from "../../constants/theme";
import images from "../../constants/images";

export class NewOfferCell extends React.Component {
    render() {
        return (
            <View style={{width: '100%'}}>
                <TouchableOpacity
                    style={styles.cell}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={[FONTS.h4, styles.cellText]}>+ Ajouter un nouveau plat</Text>
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
        backgroundColor: appTheme.COLORS.dark1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
});
