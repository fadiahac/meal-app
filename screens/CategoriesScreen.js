import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGrid from '../components/CategoryGrid';

const CategoriesScreen = props => {
    const renderGridItems = (dataItem) => {
        return <CategoryGrid dataItem={dataItem} onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeal',
                params: {
                    categoryId: dataItem.item.id
                }
            })
        }} />;
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;