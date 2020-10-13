import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = props => {

    const favMealData = MEALS.filter(meals => meals.id == 'm1' || meals.id == 'm2');

    return <MealList listData={favMealData} navigation={props.navigation} />
}

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites'
}

export default FavouritesScreen;