import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CategoriesScreen = props => {
    const renderGridItems = (dataItem) => {
        return <CategoryGrid dataItem={dataItem} onSelect={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeal',
                params: {
                    categoryId: dataItem.item.id
                }
            })
        }}/>;
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2}/>
    );
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;