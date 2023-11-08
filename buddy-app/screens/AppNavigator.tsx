import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './LoginScreen';
import {NewScreen} from './NewScreen';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Login: undefined;
  Other: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const Stack = createStackNavigator<StackParamList>();


const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Other" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
