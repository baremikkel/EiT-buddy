import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { getId, getMail, getName, getUrl, storeUser } from "./storage/DataStorage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const ChangeMail = () => {

    const [mailVal, setMailVal] = useState<string>(getMail());

    const navigator = useNavigation()

    const saveChange = async() => {
        axios.put(getUrl()+ '/users/' +getId()+ '/email?email=' +mailVal);
        storeUser(getId(), getName(), mailVal)
        navigator.navigate('Profile')
    }

    return (

        <View style = {style.container}>
            <Text style = {style.title}>Change Mail</Text>
            <TextInput
                autoCapitalize='none'
                value={mailVal}
                onChangeText={setMailVal} 
                style={style.input}
                placeholder='New Mail'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Pressable style={style.save} onPress={() => saveChange()}>
                <Text>Save</Text>
            </Pressable>
        </View>

    );


}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 28,
        paddingTop: '60%',
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        paddingLeft: 20,
        width: '50%',
        backgroundColor: '#005691',
        color: 'white',
        alignSelf: 'center',
    },
    save: {
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: '100%'
    },
})