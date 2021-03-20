import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import {Custom1Card} from "../components/HomeComps";

const data = require('../test/data.json');

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={FONTS.largeTitle}>Acceuil</Text>
            <ScrollView>
                <View style={styles.list}>
                    { data.map((d) => {
                        return (
                            <Custom1Card key={d.id} username={d.username} foodname={d.foodname} />
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
    }
})

export default Home;
