import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './LoginScreen';
import { Homescreen } from './Home';
import { Signup } from './Signup';
import { Profile } from './ProfileScreen'
import { Buddyscreen } from './Buddyscreen';
import { AddScreen } from './AddBuddyScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name='BuddyScreen' component={Buddyscreen} />
        <Stack.Screen name='AddScreen' component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
