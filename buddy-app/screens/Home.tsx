import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground } from 'react-native'
import { Navbar } from './NavBar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUrl, getId, setBuddyId } from './storage/DataStorage';

const style = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    buddy_box: {
        margin: '6%',
        width: 150,
        height: 150,
        backgroundColor: "#005691",
        borderRadius: 10,
    },

    bbcontainer: {
        flexDirection: 'row',
    },
    title: {
        paddingVertical: 60,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    add_title: {
        paddingVertical: 40,
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
    }

});

export const Homescreen = () => {
    const nav = useNavigation();

    const [fetch, setFetch] = useState<boolean>(true);
    const [plant, setPlantType] = useState([])
    const [plantid, setPlantId] = useState([]);
    const buddy = (index: number) => {
        nav.navigate('BuddyScreen')
        setBuddyId(plantid[index])
    }
    const fetchData = () => {
        axios.get(getUrl() + '/buddies/' + getId() + '/getBuddies')
            .then((reponse) => {
                setPlantType(reponse.data.map((buddy: { plant_type: string; }) => buddy.plant_type));
                setPlantId(reponse.data.map((buddy: { id: any }) => buddy.id))
            })
    }
    if (fetch == true) {
        fetchData();
        setFetch(false);
    }
    return (
        <View style={style.container}>
            <View style={style.bbcontainer}>
                {plant.map((plant, index) => (
                    <View style={style.buddy_box}>
                        <ImageBackground source={require('buddy-app/textures/Rectangle8.png')}>
                            <Pressable onPress={() => buddy(index)}>
                                <Text key={index} style={style.title}>{plant}</Text>
                            </Pressable>
                        </ImageBackground>
                    </View>
                ))}
            </View>
            <View style={style.buddy_box}>
                <ImageBackground source={require('buddy-app/textures/Rectangle8.png')}>
                    <Pressable onPress={() => console.log('hello world')}>
                        <Text style={style.add_title}>+</Text>
                    </Pressable>
                </ImageBackground>
            </View>

            <Navbar />
        </View>


    );
};

