import React, { useState } from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import {HomeScreenNavigationProp} from './AppNavigator'
import axios from 'axios';
import { getUrl, getId } from './storage/DataStorage';

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
    const [fetch, setFetch] = useState<boolean>(true);
    const [plant, setPlantType] = useState([])
    const fetchData = () => {
        axios.get(getUrl()+'/buddies/'+getId()+'/getBuddies')
        .then((reponse) =>{
               setPlantType(reponse.data.map((buddy: { plant_type: string; }) => buddy.plant_type)); 
            })
    }
    if(fetch == true) {
        fetchData();
        setFetch(false);
    }
    console.log(fetch)
    return(
        <View style={style.container}>
            {plant.map((plant, index) => (
        <Text key={index} style={style.title}>Type: {plant}</Text>
            ))}
            <Navbar/>
        </View>
    );
};
