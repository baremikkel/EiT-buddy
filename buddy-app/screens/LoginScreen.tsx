import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import {HomeScreenNavigationProp} from './AppNavigator'

type NavProp = {
    navigation: HomeScreenNavigationProp;
}

export const Login: React.FC<NavProp> = ({navigation}) => {
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
        axios.get('http://192.168.0.167:8080/users')
            .then((response) =>{
                setData(response.data)
                response.data.forEach((user: { email: string; password: string; }) => {
                    if(Email == user.email && Password == user.password) {
                        login();
                    }
                }
                )
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
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Text style={[styles.text, styles.textMod]}>Password</Text>
            <TextInput 
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
