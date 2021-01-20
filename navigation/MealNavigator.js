import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from "../screens/FilterScreen";
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from "react-navigation-drawer";

const DefaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen',
    headerTitleStyle: {
        fontFamily: 'open-sans-regular'
    }
};

const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,

}, {
    mode: 'modal',
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: DefaultNavOptions
});

const FavNavigator = createStackNavigator({
    Favorite: FavouritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: DefaultNavOptions,
});

const tabScreenConfig = {
    MEAL: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarLabel: 'MEALS!',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name="restaurant" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    FAVORITE: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'FAVORITES!',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name="favorite" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const BottomFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true, // tabBarColor works when it is set to true
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
    : createBottomTabNavigator(tabScreenConfig, {
        'tabBarOptions': {
            'activeTintColor': Colors.accentColor,
        }
    });

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    defaultNavigationOptions: DefaultNavOptions
});

const MainNavigator = createDrawerNavigator({
    'Fav Meals': {
        screen: BottomFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    'Filters': FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);