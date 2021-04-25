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

function reserve() {

}
const Details = ({route, navigation}) => {

    return (
        <View style={styles.container}>
            <DetailsPageHeader title={'Chez ' + route.params.name}
                               username={route.params.name}
                               navigation={navigation} />
            <KeyboardAvoidingView behavior="position">
                <ScrollView style={styles.scroll}>
                        <FoodInfo image={images.pizzaSlice}
                                  name={'Pates'}
                                  portion={'Assiette'}
                                  ingredients={'Lorem ipsum dolor sit amet, at eam rebum audire voluptua, mutat lorem ullamcorper'}
                        />

                        <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Heure de réservation</Text>
                        <SmallInput placeholder="18h00" keyboardType="numeric" />

                        <Text style={[ FONTS.body3Primary, MARGINS.mt8 ]}>Modalité</Text>
                        <SegmentedControl
                            values={['Sur place', 'À emporter']}
                            selectedIndex={0}
                            appearance='dark'
                            fontStyle={FONTS.body3}
                            style={[ MARGINS.mt8, MARGINS.mb32, {width: 250} ]}
                        />

                </ScrollView>
            </KeyboardAvoidingView>
            <BigRedButton onPress={reserve}
                          title='Réserver'
                          style={{
                              position: 'absolute',
                              bottom: 116,
                              alignSelf: 'center'
                          }}/>
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
    scroll: {
        height: Dimensions.get('window').height - 60 - 214
    }
})

export default Details;
