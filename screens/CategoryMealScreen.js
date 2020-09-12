import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Category Meal Screen!</Text>
            <Button title="Open Meal Detail" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' }) // same screen can be pused again n again
            }} />
            <Button title="Open Current screen again!!" onPress={() => {
                props.navigation.push('CategoryMeal') // same screen can be pused again n again
            }} />
            <Button title="Go Back" onPress={() => {
                //props.navigation.pop(); // remove current scree
                props.navigation.goBack(); // back to previous screen
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;