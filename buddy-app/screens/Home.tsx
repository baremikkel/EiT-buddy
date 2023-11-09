import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
});

const Homescreen: React.FC = () => {
    return(
        <View style = {style.container}>
            <Text>New Screeeeeeen</Text>
        </View>
    );
};

export default Homescreen;