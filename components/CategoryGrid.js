import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const CategoryGrid = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android') {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItems}>
            <TouchableComponent style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.dataItem.item.color } }}>
                    <Text style={styles.title}>{props.dataItem.item.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 15,
        overflow: Platform.OS === 'android' && Platform.Version > 21 ? 'hidden': "visible",
        elevation: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 15,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right',
    }
});

export default CategoryGrid;