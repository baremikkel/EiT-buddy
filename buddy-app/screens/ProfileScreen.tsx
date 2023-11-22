import React, {useState} from 'react';
import axios from 'axios';
import {SafeAreaView,TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { getUrl } from './storage/DataStorage';
import { getId } from './storage/DataStorage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        paddingTop: 100,
    },
    name: {
        fontSize: 20,
        paddingTop: 20,
    },
});

export const Profile = () => {


    const [userMail, setEmail] = useState("");


    axios.get(getUrl() + '/users/' + getId())
        .then((response) =>{
            setEmail(response.data.name)
    });


    return(
         <View style={styles.container}>
            <FontAwesomeIcon name="user" size={75} color="green" style={styles.profile}/>
            <Text style={styles.name}>Welcome {userMail}</Text>
            <Navbar/>
        </View>        
    );
};
