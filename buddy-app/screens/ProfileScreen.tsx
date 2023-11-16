import React from 'react';
import {SafeAreaView,TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
    return(
         <View style={styles.container}>
            <FontAwesomeIcon name="user" size={75} color="green" style={styles.profile}/>
            <Text style={styles.name}>PROFILE Screen</Text>
            <Navbar/>
        </View>        
    );
};
