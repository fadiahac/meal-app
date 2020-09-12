import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colors } from '../constants/Colors';
import { color } from 'react-native-reanimated';

const CategoriesScreen = props => {
    const renderGridItems = (dataItem) => {
        return (
            <TouchableOpacity
                style={styles.gridItems}
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeal' })
                }}>
                <View>
                    <Text>{dataItem.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Category',
    headerStyle: {
        backgroundColor: 'blue'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;