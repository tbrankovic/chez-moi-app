import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import HomeHeader from "../components/molecules/HomeHeader";
import CustomSearchBar from "../components/atoms/CustomSearchBar";
import FoodCard from "../components/molecules/FoodCard";
import PageHeader from "../components/organisms/PageHeader";

const testData = require('../test/data.json');

const Home = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <FoodCard key={item.id}
                      username={item.username}
                      food={item.food}
                      portion="portion"
                      distance="2,3"
                      imageSource={images.pizzaSlice}
                      navigation={navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Accueil" navigation={navigation} />
            <CustomSearchBar />
            <FlatList style={styles.list}
                      data={testData}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      numColumns={2}
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        backgroundColor: COLORS.grey2
    },
    list: {
        borderRadius: 20,
        marginBottom: 92
    },
})

export default Home;
