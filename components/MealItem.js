import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from "./DefaultText";

const MealItem = props => {
    return (
        <View style={styles.mealContainer}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealTitle }}>
                        <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDescription }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText style={styles.descText}>{props.complexity}</DefaultText>
                        <DefaultText style={styles.descText}>{props.affordability}</DefaultText>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealContainer: {
        height: 250,
        margin: 10,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealTitle: {
        height: '85%',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontFamily: 'open-sans-bold',
        fontSize: 19,
    },
    mealDescription: {
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    descText: {
        textTransform: 'uppercase'
    }
});

export default MealItem;