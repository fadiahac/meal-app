import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from "../constants/Colors"

const CustomHeaderButton = props => {
    return (
        <HeaderButton {...props} // important
            IconComponent={MaterialIcons} 
            iconSize={24}
            color={Platform.OS === 'android' ? 'white': Colors.primaryColor}
        ></HeaderButton>
    );
}

export default CustomHeaderButton;