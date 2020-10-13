import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');

    const selectedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return <MealList listData={selectedMeal} navigation={props.navigation} />
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const selectedCategoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === selectedCategoryId);
    return {
        headerTitle: selectedCategory.title,
    }

}

export default CategoryMealScreen;