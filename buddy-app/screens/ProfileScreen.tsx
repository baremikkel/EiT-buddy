import React from 'react';
import {SafeAreaView,TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import { Navbar } from './NavBar';

export const Profile = () => {
    return(
           <View style={styles.container}>
            <Text>New Screen</Text>
            <Navbar/>
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        borderWidth: 1
      }
})