import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {

    const renderMeal = (dataItem) => {
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
                        mealId: dataItem.item.id
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