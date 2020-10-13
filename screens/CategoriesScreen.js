import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
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