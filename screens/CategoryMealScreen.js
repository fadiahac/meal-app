import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');

    const selectedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    const renderMeal = (dataItem) => {
        return <MealItem
            title={dataItem.item.title}
            image={dataItem.item.imageUrl}
            duration={dataItem.item.duration}
            complexity={dataItem.item.complexity}
            affordability={dataItem.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params : {
                        mealId: dataItem.item.id
                    }
                })    
            }}
        />;
    }

    return (
        <View style={styles.screen}>
            <FlatList data={selectedMeal}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeal}
                style={{ width: '100%' }}
            />
            {/* <Button title="Open Meal Detail" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' }) // same screen can be pused again n again
            }} />
            <Button title="Open Current screen again!!" onPress={() => {
                props.navigation.push('CategoryMeal') // same screen can be pused again n again
            }} />
            <Button title="Go Back" onPress={() => {
                //props.navigation.pop(); // remove current scree
                props.navigation.goBack(); // back to previous screen
            }} /> */}
        </View>
    );
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const selectedCategoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === selectedCategoryId);
    return {
        headerTitle: selectedCategory.title,
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;