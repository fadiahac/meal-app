import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';

const MealList = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMeal = (dataItem) => {
        const isFavMeal = favouriteMeals.some(meal => meal.id === dataItem.item.id);
        return <MealItem
            title={dataItem.item.title}
            image={dataItem.item.imageUrl}
            duration={dataItem.item.duration}
            complexity={dataItem.item.complexity}
            affordability={dataItem.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: dataItem.item.id,
                        mealTitle: dataItem.item.title,
                        isFav: isFavMeal
                    }
                })
            }}
        />;
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeal}
                style={{ width: '100%' }}
            />
            {/* <Button title="Open Meal Detail" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' }) // same screen can be pused again n again
            }} />
            <Button title="Open Current screen again!!" onPress={() => {
                props.navigation.push('CategoryMeal') // same screen can be pused again n again
            }} />
            <Button title="Go Back" onPress={() => {
                //props.navigation.pop(); // remove current scree
                props.navigation.goBack(); // back to previous screen
            }} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;