import React, {useState} from 'react';
import axios from 'axios';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import {storeUser, getId, getUrl} from './storage/DataStorage'
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
    const navigation =useNavigation();
    const login = () => {
        navigation.navigate('Homescreen')
    }
    const signup = () => {
        navigation.navigate('Signup')
    }
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const verify = (
        Email: string,
        Password: string
         ) => {
        axios.get(getUrl()+'/users')
            .then((response) =>{
                setData(response.data)
                response.data.forEach((user: {id: any; name: string; email: string; password: string; }) => {
                    if(Email == user.email && Password == user.password) {
                        storeUser(user.id, [user.name,user.email, user.password]);
                        login();
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('buddy-app/textures/plantBackground.jpg')} resizeMode='cover' style={styles.image}>
           <Text style={[styles.text, styles.textMod]}>Email</Text>
            <TextInput
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Text style={[styles.text, styles.textMod]}>Password</Text>
            <TextInput 
                autoCapitalize='none'
                value={password}
                onChangeText={setPass}
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Pressable style={styles.button} onPress={() => verify(email, password)}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable onPress={signup} style={styles.signup}>
                <Text style={styles.text}>or sign up here</Text>
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
    textMod:{
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
        marginVertical: 15,
        marginHorizontal: 50,
        alignItems: 'center',
        backgroundColor: 'rgba(0,15,0,0.3)',
    },
    text:{
        color: 'white'
    },
    signup: {
        paddingRight: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
