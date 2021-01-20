import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import DefaultText from "../components/DefaultText";
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return <View style={styles.list}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};

const MealDetailScreen = props => {

    const availableMeals = useSelector(state => state.meals.meals);
    const selectedMealId = props.navigation.getParam('mealId');
    const isCurrentMealFav = useSelector(
        state => state.meals.favouriteMeals.some(
            meal => meal.id === selectedMealId
        )
    );
    const selectedMeal = availableMeals.find(meal => meal.id === selectedMealId);

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedMealId))
    }, [dispatch, selectedMealId]);

    useEffect(() => {
        //props.navigation.setParams({ mealTitle: selectedMeal.title });
        props.navigation.setParams({ toggleFav: toggleFavHandler });
    }, [toggleFavHandler]);

    useEffect( () => {
        props.navigation.setParams({isFav: isCurrentMealFav});
    }, [isCurrentMealFav]);

    return (
        <ScrollView>
            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <View style={styles.detailScreen}>
                    <DefaultText>{selectedMeal.duration}m</DefaultText>
                    <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.title}>Ingredient</Text>
                {selectedMeal.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const selectedMealTitle = navigationData.navigation.getParam('mealTitle');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: selectedMealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName={isFav ? 'favorite' : 'favorite-border'}
                    onPress={navigationData.navigation.getParam('toggleFav')}
                />
            </HeaderButtons>,
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    detailScreen: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    list: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;