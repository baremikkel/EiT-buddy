import React, { useState } from 'react';
import axios from 'axios';
import { TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground } from 'react-native'
import { storeUser, getId, getUrl } from './storage/DataStorage'
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
    const [isRegistered, setIsRegistered] = useState<boolean>(true);

    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('Homescreen')
    }
    const signup = () => {
        navigation.navigate('Signup')
    }
    const [data, setData] = useState([]);
    const [password, setPass] = useState('');
    const [email, setEmail] = useState('');

    const verify = (
        Email: string,
        Password: string
    ) => {
        axios.get(getUrl() + '/users')
            .then((response) => {
                response.data.forEach((user: {id: number; email: string}) => {
                    if(Email.toLowerCase() == user.email.toLowerCase()) {
                        setIsRegistered(true);
                        axios.get(getUrl()+'/users/'+ user.id +'/verify?verify='+ Password)
                        .then((response) => {
                            const validUser = response.data
                            if(validUser) {
                                setIsValidPassword(true);
                                login();
                            } else {
                            setIsValidPassword(false);
                            }
                        })
                    } else {
                        setIsRegistered(false);
                    }
                })
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textMod]}>Email</Text>
            <TextInput
                autoCapitalize='none'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Email address'
                placeholderTextColor="lightgray"
            ></TextInput>

            {!isRegistered && (
                <Text style={styles.warning}>No account with this email</Text>
            )}

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

            {!isValidPassword && (
                <Text style={styles.warning}>Invalid password!</Text>
            )}

            <Pressable style={styles.button} onPress={() => verify(email, password)}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable onPress={signup} style={styles.signup}>
                <Text>or sign up here</Text>
            </Pressable>
        </View>
    )
}

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
    textMod: {
        paddingVertical: 15,
        paddingLeft: 20,
    },
    background_image: {
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
        backgroundColor: '#005691',
    },
    text: {
        color: 'white'
    },
    signup: {
        width: '30%',
        marginHorizontal: '65%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    warning: {
        color: 'red',
        marginVertical: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    image: {
        zIndex: 2,
        width: 300,
        height: 100,
        alignSelf: 'center',
    },
    image_container: {
        marginBottom: 120,
    }
});
