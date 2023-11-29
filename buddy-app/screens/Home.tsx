import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground, RefreshControl, ScrollView } from 'react-native'
import { Navbar } from './NavBar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUrl, getId, setBuddyId } from './storage/DataStorage';
import { AddScreen } from './AddBuddyScreen';

const style = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    buddy_box: {
        margin: 20,
        width: 150,
        height: 150,
        backgroundColor: "#005691",
        borderRadius: 10,
    },
    addbuddy_box: {
        margin: 20,
        width: 150,
        height: 150,
        backgroundColor: "#005691",
        borderRadius: 100,
        overflow: 'hidden'
    },

    bbcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    title: {
        paddingTop: 60,
        paddingBottom: 60,
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

    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [plant, setPlantType] = useState([])
    const [plantid, setPlantId] = useState([]);


    const buddy = (index: number) => {
        nav.navigate('BuddyScreen')
        setBuddyId(plantid[index])

    }
    const add = () => {
        nav.navigate('AddScreen')
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(getUrl() + '/buddies/' + getId() + '/getBuddies');
            setPlantType(response.data.map((buddy: { plant_type: string }) => buddy.plant_type));
            setPlantId(response.data.map((buddy: { id: any }) => buddy.id));
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const onRefresh = () => {
        setRefreshing(true)
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <View style={style.container}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={style.bbcontainer}>
                    {plant.map((plant, index) => (
                        <View key={index} style={style.buddy_box}>
                            <ImageBackground source={require('buddy-app/textures/Rectangle8.png')}>
                                <Pressable onPress={() => buddy(index)}>
                                    <Text style={style.title}>{plant}</Text>
                                </Pressable>
                            </ImageBackground>
                        </View>
                    ))}
                </View>
                <View style={style.addbuddy_box}>
                    <ImageBackground source={require('buddy-app/textures/Rectangle8.png')}>
                        <Pressable onPress={() => add()}>
                            <Text style={style.add_title}>+</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
            </ScrollView>
            <Navbar />
        </View>
    );
};