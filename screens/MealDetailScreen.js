import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {

    const selectedMealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === selectedMealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go to Category" onPress={() => {
                props.navigation.popToTop(); // direct back to main screen with removing all screen from stack!
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop(); // remove current scree
            }} />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const selectedMealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === selectedMealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName='favorite-border'
                onPress={() => {
                    alert('Marked as Fav!!')
                }}
            />
        </HeaderButtons>,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;