import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import {HomeScreenNavigationProp} from './AppNavigator'

type NavProp = {
    nav: HomeScreenNavigationProp;
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export const Homescreen: React.FC<NavProp> = ({nav}) => {
    return(
        <View style={style.container}>
            <Text>BEANS</Text>
            <Navbar nav={nav}/>
        </View>
    );
};