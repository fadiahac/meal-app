import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealNavigator);