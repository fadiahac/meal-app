import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen!</Text>
            <Button title="Go to Category" onPress={() => {
                props.navigation.popToTop(); // direct back to main screen with removing all screen from stack!
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop(); // remove current scree
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

export default MealDetailScreen;