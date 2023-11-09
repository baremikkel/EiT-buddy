import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './LoginScreen';
import {Homescreen} from './Home';
import {Signup } from './Signup';
import {Profile} from './ProfileScreen'
import {StackNavigationProp } from '@react-navigation/stack';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

type StackParamList = {
  Login: undefined;
  Homescreen: undefined;
  Signup: undefined;
  Profile: undefined
};

export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const Stack = createStackNavigator<StackParamList>();

type NavProp = {
  nav: HomeScreenNavigationProp;
}
export const Navbar: React.FC<NavProp> = ({nav}) => {
    const Home = () => {
      nav.navigate('Homescreen')
    }
    const Profile = () => {
      nav.navigate('Profile')
  }
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonInfo}><EntypoIcon name="home" size={25}/></Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonInfo}><FontAwesomeIcon name="user" size={25}/></Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonInfo}><EntypoIcon name="shopping-cart" size={25}/></Text>
      </Pressable>
    </View>
  )
}

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

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
    backgroundColor: 'gray',
    width: 33
  },
  buttonInfo: {
    textAlign: 'center'
  }
}
)