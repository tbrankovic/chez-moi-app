import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { Custom1Card } from "../components/HomeComponents";
import HomeHeader from "../components/headers/HomeHeader";

const testData = require('../test/data.json');

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <ScrollView>
                <View style={styles.list}>
                    { testData.map((d) => {
                        return (
                            <Custom1Card key={d.id}
                                         username={d.username}
                                         foodname={d.foodname}
                                         navigation={navigation}
                                        />
                        )
                    }) }
                </View>
            </ScrollView>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.dark2
    },
    list: {
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
})

export default Home;
