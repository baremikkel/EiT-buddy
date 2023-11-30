import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground, Dimensions } from 'react-native';
import { getBuddyId, getId, getUrl } from './storage/DataStorage';
import { Navbar } from './NavBar';
import axios from 'axios';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export const AddScreen = () => {
    const nav = useNavigation()
    const [fetch, setFetch] = useState<boolean>(true);
    const [buddies, setBuddies] = useState([])
    const [newType, setNewType] = useState([])

    const fetchUnclaimedBuddies = () => {
        axios.get(getUrl() + '/buddies/unClaimed')
            .then((response) => {
                setBuddies(response.data.map((buddy: { id: any; plant_type: string }) => buddy))
            })
    }
    const returnToHome = () => {
        nav.navigate('Homescreen')
    }
    const claimBuddy = async (type: string, id: any) => {
        if (type !== 'Unclaimed') {
            try {
                await axios.put(getUrl() + '/buddies/' + id + '/type?type=' + type.substring(0));
                await axios.put(getUrl() + '/buddies/' + getId() + '/addbuddy/' + id);

                type = "Unclaimed";
                setFetch(true);
                returnToHome();
            } catch (error) {
                console.error('Error during claimBuddy:', error);
            }
        }
    };


    if (fetch == true) {
        fetchUnclaimedBuddies()
        setFetch(false)
    }

    return (
        <View style={style.container}>
            <View style={style.unclaimedContainer}>
                {buddies.map((buddy, index) => (
                    <View style={style.unclaimed} key={index}>
                        <Text style={style.text}>Buddy ID: {buddy.id}</Text>
                        <TextInput
                            placeholder={buddy.plant_type}
                            style={style.text}
                            value={newType[index]}
                            onChangeText={(text) => {
                                const updatedNewType = [...newType];
                                updatedNewType[index] = text;
                                setNewType(updatedNewType);
                            }}

                        ></TextInput>
                        <Pressable onPress={() => claimBuddy(newType[index], buddy.id)}>
                            <FontAwesomeIcon name='check-circle-o' style={style.claimText} size={30} />
                        </Pressable>
                    </View>
                ))}
            </View>
            <Navbar />
        </View>
    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    unclaimedContainer: {
        marginTop: 30,
        marginHorizontal: 10,
        width: Dimensions.get("window").width - 15,
    },
    unclaimed: {
        marginVertical: 5,
        backgroundColor: 'rgb(0,79,142)',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        marginHorizontal: 10,
        fontSize: 25,
    },
    claimText: {
        margin: 5,
        textAlign: 'center'
    }
})