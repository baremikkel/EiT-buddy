import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import {HomeScreenNavigationProp} from './AppNavigator'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: 100,
        fontSize: 20,
    },
});

export const Homescreen = () => {
    return(
        <View style={style.container}>
            <Text style={style.title}>YOUR BUDDIES</Text>
            <Navbar/>
        </View>
    );
};
