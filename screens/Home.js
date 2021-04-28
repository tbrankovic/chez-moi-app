import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import CustomSearchBar from "../components/atoms/CustomSearchBar";
import FoodCard from "../components/molecules/FoodCard";
import PageHeader from "../components/organisms/PageHeader";

const testData = require('../test/data.json');

const testImages = [images.lasagna, images.smoothie, images.pasta, images.pizzaSlice, images.salad, images.quiche]

const Home = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <FoodCard key={item.id}
                      imageSource={testImages[item.id - 1]}
                      username={item.username}
                      food={item.food}
                      portion={item.portion}
                      distance={item.distance}
                      navigation={navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Accueil" navigation={navigation} />
            <CustomSearchBar />
            <FlatList style={[ styles.list ]}
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
