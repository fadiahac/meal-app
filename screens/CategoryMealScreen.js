import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {

    // get meals from store via redux
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const categoryId = props.navigation.getParam('categoryId');

    const selectedMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    if (selectedMeal.length === 0 || !selectedMeal) {
        return <View style={styles.emptyScree}>
            <DefaultText>No meals found. Please check filter!!</DefaultText>
        </View>
    }
    return <MealList listData={selectedMeal} navigation={props.navigation} />
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const selectedCategoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === selectedCategoryId);
    return {
        headerTitle: selectedCategory.title,
    }

}

const styles = StyleSheet.create({
    emptyScree: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;