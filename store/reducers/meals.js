import { MEALS } from '../../data/dummy-data';
import { FILTER_MEAL, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: [],
}

const mealsReduer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFav = [...state.favouriteMeals];
                updatedFav.splice(existingIndex, 1);
                return { ...state, favouriteMeals: updatedFav }
            } else {
                const newFav = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: [...state.favouriteMeals, newFav] }
            }

        case FILTER_MEAL:
            const appliedFilters = action.filterSettings;
            const filteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if(appliedFilters.vegeterian && !meal.isVegeterian) {
                    return false;
                }

                return true;
            })
            return {...state, filteredMeals : filteredMeals}
        default:
            return state;
    }
}

export default mealsReduer;