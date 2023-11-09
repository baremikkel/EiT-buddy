import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './AppNavigator';
import {HomeScreenNavigationProp} from './AppNavigator'

type NavProp = {
    nav: HomeScreenNavigationProp;
}

export const Homescreen: React.FC<NavProp> = ({nav}) => {
    return(
        <Navbar nav={nav}/>
    );
};