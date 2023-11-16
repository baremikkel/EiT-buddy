import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import {HomeScreenNavigationProp} from './AppNavigator'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const Homescreen = () => {
    return(
        <View style={style.container}>
            <Text>HOME Screen</Text>
            <Navbar/>
        </View>
    );
};
