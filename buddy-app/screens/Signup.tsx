import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import {HomeScreenNavigationProp} from './AppNavigator'
import axios, { AxiosResponse } from 'axios'
import { getUrl } from './storage/DataStorage';

type NavProp = {
    navigation: HomeScreenNavigationProp;
}

export const Signup: React.FC<NavProp> = ({navigation}) => {

    const [areIdentical, setAreIdentical] = useState<boolean>(true);

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
                password: pass,
            }
           axios.post(getUrl()+'/users', data)
           navigation.navigate('Login')
        }

        if(pass != cpass) {
            setAreIdentical(false);
        };
    }
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const [cPassword, setCPass] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={require('buddy-app/textures/logo.png')} style={styles.image} />
            </View>
            <Text style={[styles.textMod]}>Username</Text>
            <TextInput
                autoCapitalize='none'
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder='Username'
                placeholderTextColor="lightgray"
            ></TextInput>
           <Text style={[styles.textMod]}>Email</Text>
            <TextInput
                autoCapitalize='none'       
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Text style={[styles.textMod]}>Password</Text>
            <TextInput
                autoCapitalize='none'
                value={password}
                onChangeText={setPass} 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor="lightgray"
            ></TextInput>
            <Text style={[styles.textMod]}>Confirm Password</Text>
            <TextInput
                autoCapitalize='none'
                value={cPassword}
                onChangeText={setCPass} 
                style={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor="lightgray"
            ></TextInput>

            {!areIdentical && (
                <Text style={styles.warning}>Passwords don't match!</Text>
            )}

            <Pressable style={styles.button} onPress={() => signup(name, email, password, cPassword)}>
                <Text style={styles.text}>Signup</Text>
            </Pressable>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginHorizontal: 15,
        borderRadius: 20,
        borderWidth: 1,
        height: 40,
        paddingLeft: 20,
        backgroundColor: '#005691',
        color: 'white'
    },
    textMod:{
        paddingVertical: 15,
        paddingLeft: 20,
    },
    image: {
        zIndex: 2,
        width: 300,
        height: 100,
        alignSelf: 'center',
    },
    button: {
        borderRadius: 20,
        borderWidth: 1,
        paddingVertical: 10,
        height: 40,
        marginVertical: 15,
        marginHorizontal: 50,
        alignItems: 'center',
        backgroundColor: '#005691',
    },
    text:{
        color: 'white'
    },
    signup: {
        paddingRight: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    warning: {
            color: 'red',
            marginVertical: 5,
            fontWeight: 'bold',
            alignSelf: 'center',
    },
    image_container: {
        marginBottom: 80,
    }
});