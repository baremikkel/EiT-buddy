import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const changeMail = () => {

    return (

        <View style = {style.container}>
            <Text style = {style.title}>Change Mail</Text>

        </View>

    );


}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
    },
})