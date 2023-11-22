import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground, Dimensions} from 'react-native';
import { getBuddyId } from './storage/DataStorage';
import { Navbar } from './NavBar';
import { LineChart } from 'react-native-chart-kit';

export const Buddyscreen = () => {
   
    return (
        <View style={style.container}>
        <LineChart
            data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
            {
            data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-15} // from react-native
    height={220}
    fromZero={true}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundGradientFrom: "rgb(79,145,67)",
      backgroundGradientTo: "rgb(79,150,67)",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    }}
    bezier
    style={style.chart}
  />
            <Text style={style.t}>Plant type: {getBuddyId()}</Text>
            <Text style={style.t}>Soil moisture: {getBuddyId()}</Text>
            <Text style={style.t}>Temperature: {getBuddyId()}</Text>
            <Text style={style.t}>Light: {getBuddyId()}</Text>
            <Navbar/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    t: {
        backgroundColor: 'red',
        textAlign: 'left',
        width: Dimensions.get("window").width-15
    },
    chart: {
        marginTop: 35,
        borderRadius: 16,
        marginBottom: 15
    }
})