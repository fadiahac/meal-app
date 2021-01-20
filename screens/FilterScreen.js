import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux';
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import { filterMeal } from '../store/actions/meals';

const FilterSwtich = props => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            trackColor={{ true: Colors.primaryColor }}
            thumbColor={Colors.primaryColor}
            value={props.state} onValueChange={props.onChange} />
    </View>
}

const FilterScreen = props => {
    const { navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactosFree, setIsLactosFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree : isGlutenFree,
            lactoseFree: isLactosFree,
            vegan : isVegan,
            vegetarian : isVegetarian
        }

        dispatch(filterMeal(appliedFilters))
    },[isGlutenFree, isLactosFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwtich
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => { setIsGlutenFree(newValue) }} />

            <FilterSwtich
                label="Lactos-free"
                state={isLactosFree}
                onChange={newValue => { setIsLactosFree(newValue) }} />

            <FilterSwtich
                label="Vegan"
                state={isVegan}
                onChange={newValue => { setIsVegan(newValue) }} />

            <FilterSwtich
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => { setIsVegetarian(newValue) }} />
        </View>
    );
};

FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save Filter" iconName="save" onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        margin: 15,
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 20 
    }
});

export default FilterScreen;