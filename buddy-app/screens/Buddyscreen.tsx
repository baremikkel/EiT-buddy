import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native';
import { getBuddyId } from './storage/DataStorage';

export const Buddyscreen = () => {
    console.log(getBuddyId())
    
    return (
        <View>
            <Text>{getBuddyId()}</Text>
        </View>
    );
}