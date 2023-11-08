import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {Login} from './screens/LoginScreen'
import React from 'react';
import AppNavigator from './screens/AppNavigator';

const App: React.FC = () => {
  return <AppNavigator/>;
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
