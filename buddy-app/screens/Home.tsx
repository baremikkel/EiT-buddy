import React, { useState } from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import { useNavigation } from '@react-navigation/native';
import {HomeScreenNavigationProp} from './AppNavigator'
import axios from 'axios';
import { getUrl, getId, setBuddyId } from './storage/DataStorage';

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
    const nav = useNavigation();

    const [fetch, setFetch] = useState<boolean>(true);
    const [plant, setPlantType] = useState([])
    const [plantid, setPlantId] = useState([]);
    const buddy = (index) =>{
        nav.navigate('BuddyScreen')
        setBuddyId(plantid[index])
    }
    const fetchData = () => {
        axios.get(getUrl()+'/buddies/'+getId()+'/getBuddies')
        .then((reponse) =>{
               setPlantType(reponse.data.map((buddy: { plant_type: string; }) => buddy.plant_type)); 
                setPlantId(reponse.data.map((buddy: {id: any}) => buddy.id))
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
                <Pressable onPress={() => buddy(index)}>
                     <Text key={index} style={style.title}>Type: {plant}</Text>
                </Pressable>
            ))}
            <Navbar/>
        </View>
    );
};
