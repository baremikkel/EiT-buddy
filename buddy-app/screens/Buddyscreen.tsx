import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground, Dimensions} from 'react-native';
import { getBuddyId, getUrl } from './storage/DataStorage';
import { Navbar } from './NavBar';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

export const Buddyscreen = () => {
    const [fetch, setFetch] = useState<boolean>(true);
    const [plant, setPlantType] = useState("")
    const [soil, setSoil] = useState("")
    const [temp, setTemp] = useState("")
    const [light, setLight] = useState("")
    const [activeChart, setActiveChart] = useState("");
    const [title, setTitle] = useState("");


    const getType = () => {
      axios.get(getUrl()+'/buddies/'+getBuddyId())
        .then((response) =>{
          setPlantType(response.data.plant_type)
      })
    }
    const getNewestData = () => {
      axios.get(getUrl()+'/data/'+getBuddyId()+'/getData')
      .then((response) =>{
        const dataArray = response.data;
        console.log(dataArray[dataArray.length-1])
        setSoil(dataArray[dataArray.length -1].soil)
        setTemp(dataArray[dataArray.length -1].temperature)
        setLight(dataArray[dataArray.length -1].light)
    })
    }
    if(fetch == true) {
      getType();
      getNewestData();
      setFetch(false);
      setActiveChart('soil')
      setTitle('Soil Moisture')
    }

    return (
        <View style={style.container}>
          <View style={style.chart_container}>
            <Text style={style.text_c}>{title}</Text>
            {activeChart === 'temp'&& (
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
    height={230}
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
            )}
            {activeChart === 'soil' && (
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
    height={230}
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
            )}
            {activeChart === 'light' && (
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
    height={230}
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
            )}
            
          </View>

        <View style={style.button_group}>
          <Pressable style={style.button}
            onPressIn={() => [setActiveChart('soil'), setTitle("Soil Moisture")]}>
            <Text style={style.text_center}>Soil moisture</Text>
          </Pressable>
          <Pressable style={style.button}
            onPressIn={() => [setActiveChart('temp'), setTitle("Temperature")]}>
            <Text style={style.text_center}>Temperature</Text>
          </Pressable>
          <Pressable style={style.button}
            onPressIn={() => [setActiveChart('light'), setTitle("Light")]}>
            <Text style={style.text_center}>Light</Text>
          </Pressable>
        </View>
        
        <View style={style.text_container}>
          <View style={style.text_pair}>
            <Text style={style.text_l}>Plant type: </Text>
            <Text style={style.text_r}>{plant}</Text>
          </View>
          <View style={style.text_pair}>
            <Text style={style.text_l}>Soil moisture: </Text>
            <Text style={style.text_r}>{soil}</Text>
          </View>
          <View style={style.text_pair}>
            <Text style={style.text_l}>Temperature: </Text>
            <Text style={style.text_r}>{temp}</Text>
          </View>
         <View style={style.text_pair}>
            <Text style={style.text_l}>Light: </Text>
            <Text style={style.text_r}>{light}</Text>
        </View> 
        </View>
          
            
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
    text_r: {
      textAlign: 'right',
      fontSize: 20,
    },
    text_l: {
      fontSize: 20,
    },
    text_container: {
      backgroundColor: 'rgba(79,140,67,0.5)',
      width: Dimensions.get("window").width-15,
      padding: 10,
      borderRadius: 15,
    },
    text_pair:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
    },
    chart_container: {
      marginTop: 35,

    },
    chart: {
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    },
    text_c: {
      textAlign: 'center',
      color: 'white',
      fontSize: 40,
      backgroundColor: 'rgb(79,145,67)',
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      borderWidth: 1,
      borderColor: 'black',
    },
    button: {
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'rgb(72,119,61)',
      width: '33%'
    },
    button_group: {
      flexDirection: 'row',
      width: Dimensions.get("window").width-15,
      marginBottom: 15,
    },
    text_center: {
      textAlign: 'center',
    }
})