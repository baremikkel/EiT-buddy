import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {Test} from './LoginScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Test></Test>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
