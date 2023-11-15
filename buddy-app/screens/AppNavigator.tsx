import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './LoginScreen';
import {Homescreen} from './Home';
import {Signup } from './Signup';
import {Profile} from './ProfileScreen'
import {StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Login: undefined;
  Homescreen: undefined;
  Signup: undefined;
  Profile: undefined
};

export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const Stack = createStackNavigator<StackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name="Homescreen" component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
