import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Navbar = () => {
  const nav =  useNavigation();
    const home = () => {
      nav.navigate('Homescreen')
    }

    const profile = () => {
      nav.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={home}>
        <Text style={styles.buttonInfo}><EntypoIcon name="home" size={25}/></Text>
      </Pressable>
      <Pressable style={styles.button} onPress={profile}>
        <Text style={styles.buttonInfo}><FontAwesomeIcon name="user" size={25}/></Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonInfo}><EntypoIcon name="shopping-cart" size={25}/></Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    button: {
      flex: 1,
      padding: 10,
      borderWidth: 1,
      backgroundColor: '#0075FF',
      width: 33
    },
    buttonInfo: {
      color: 'white',
      textAlign: 'center'
    }
  }
  )