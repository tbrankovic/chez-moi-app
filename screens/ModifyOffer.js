import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, MARGINS} from '../constants'
import {SmallInput} from "../components/atoms/SmallInput";
import BigRedButton from "../components/atoms/BigRedButton";
import FoodInfo from "../components/molecules/FoodInfo";
import DetailsPageHeader from "../components/organisms/DetailsPageHeader";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {colors} from "react-native-elements";

function save() {

}

const ModifyOffer = ({route, navigation}) => {

    return (
        <View style={styles.container}>
            <DetailsPageHeader username={route.params.name} navigation={navigation} />
            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.scroll}>
                    <FoodInfo image={images.pizzaSlice}
                              name={'Pates'}
                              portion={'Assiette'}
                              ingredients={'Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper'}
                    />

                    <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Plats restants</Text>
                    <SmallInput placeholder="18h00" keyboardType="numeric" style={MARGINS.mt8} />

                    <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Horaires</Text>
                    <View style={[ styles.horizontalContainer, MARGINS.mt8 ]}>
                        <Text style={FONTS.body3}>De{'\t'}</Text>
                        <SmallInput placeholder="10h00"/>
                    </View>
                    <View style={[styles.horizontalContainer, MARGINS.mt8 ]}>
                        <Text style={FONTS.body3}>À{'\t'}</Text>
                        <SmallInput placeholder="18h00"/>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
            <BigRedButton onPress={save}
                          title='Sauvegarder'
                          style={styles.submit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scroll: {
        height: Dimensions.get('window').height - 60 - 214
    },
    submit: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 116,
    }
})

export default ModifyOffer;
