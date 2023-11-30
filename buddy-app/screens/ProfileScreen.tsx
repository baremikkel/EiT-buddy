import React, { useState } from 'react';
import axios from 'axios';
import { SafeAreaView, TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground } from 'react-native'
import { Navbar } from './NavBar';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { getId, getMail, getName, getUrl } from './storage/DataStorage';
import { useNavigation } from "@react-navigation/native";

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
        fontSize: 28,
        paddingTop: 20,
        paddingBottom: 50,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    details: {
        fontSize: 20,
        paddingTop: 10,
    },
    edit: {
        marginLeft: 20,
    },

});

export const Profile = () => {
    const navigation = useNavigation();
    const changeMail = () => {
        navigation.navigate('ChangeMail')
    }

    return (
        <View style={styles.container}>
            <FontAwesomeIcon name="user" size={75} color="#005691" style={styles.profile} />
            <Text style={styles.name}>Welcome {getName()}</Text>
            <View style={styles.info}>
                <Text style={styles.details}>Email: {getMail()}</Text>
                <Pressable style={styles.edit} onPress={changeMail}>
                    <FontAwesomeIcon name="pencil" size={20} color="#005691" />
                </Pressable>
            </View>
            <Navbar />
        </View>
    );
};
