import React, { useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from '../components/DefaultText'

const FavouritesScreen = props => {
    const favMealData = useSelector(state => state.meals.favouriteMeals);
    useEffect(() => {
        props.navigation.setParams({totalFav:favMealData.length})
    },[favMealData]);
    if(favMealData.length === 0) {
        return <View style={styles.emptyScree}>
        <DefaultText>No favorite meal found. Please mark as favorite!!</DefaultText>
    </View>
    }

    return <MealList listData={favMealData} navigation={props.navigation}/>
};

FavouritesScreen.navigationOptions = (navData) => {
    const totalFavMeals = navData.navigation.getParam('totalFav');
    return {
        headerTitle: `Your Favourites (${totalFavMeals})`,
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
    emptyScree: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default FavouritesScreen;