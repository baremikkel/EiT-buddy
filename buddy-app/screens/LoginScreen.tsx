import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import {HomeScreenNavigationProp} from './AppNavigator'

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
}

export const Login: React.FC<HomeScreenProps> = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('Other')
        console.log("test")
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('buddy-app/textures/plantBackground.jpg')} resizeMode='cover' style={styles.image}>
           <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Text style={styles.text}>Password</Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttontext}>Login</Text>
            </Pressable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      },
    input:{
        marginHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        paddingLeft: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white' 
    },
    text:{
        color: 'white',
        paddingVertical: 15,
        paddingLeft: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        borderRadius: 20,
        borderWidth: 1,
        paddingVertical: 10,
        height: 40,
        margin: 25,
        alignItems: 'center',
        backgroundColor: 'rgba(0,15,0,0.3)',
    },
    buttontext:{
        color: 'white'
    }
});
