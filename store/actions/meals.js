export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FILTER_MEAL = 'FILTER_MEAL';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id 
    }
};

export const filterMeal = (appliedFilters) => {
    return {
        type: FILTER_MEAL,
        filterSettings: appliedFilters
    }
};