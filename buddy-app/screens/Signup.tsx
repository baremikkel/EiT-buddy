import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import {HomeScreenNavigationProp} from './AppNavigator'
import axios, { AxiosResponse } from 'axios'
import { getUrl } from './storage/DataStorage';

type NavProp = {
    navigation: HomeScreenNavigationProp;
}

export const Signup: React.FC<NavProp> = ({navigation}) => {
    const signup = (
        uName: string,
        Email: string,
        pass: string,
        cpass: string
        ) => {
            let data;
            if(pass == cpass) {
                data = {
                name: uName,
                email: Email,
                password: pass
            }
        }
        axios.post(getUrl()+'/users', data)
        navigation.navigate('Login')
    }
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const [cPassword, setCPass] = useState('');

    return(
        <View style={styles.container}>
            <ImageBackground source={require('buddy-app/textures/plantBackground.jpg')} resizeMode='cover' style={styles.image}>
            <Text style={[styles.text, styles.textMod]}>Username</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder='Username'
                placeholderTextColor="lightgray"
            ></TextInput>
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
            <Text style={[styles.text, styles.textMod]}>Confirm Password</Text>
            <TextInput
                value={cPassword}
                onChangeText={setCPass} 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Pressable style={styles.button} onPress={() => signup(name, email, password, cPassword)}>
                <Text style={styles.text}>Signup</Text>
            </Pressable>
            
            </ImageBackground>
        </View>
    );
};

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