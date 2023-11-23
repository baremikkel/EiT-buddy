import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, Button, Pressable, ImageBackground, Dimensions } from 'react-native';
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

  const [xAxis, setxAxis] = useState([])
  const [yAxisTemp, setyAxisTemp] = useState([])
  const [yAxisSoil, setyAxisSoil] = useState([])
  const [yAxisLight, setyAxisLight] = useState([])


  const getType = () => {
    axios.get(getUrl() + '/buddies/' + getBuddyId())
      .then((response) => {
        setPlantType(response.data.plant_type)
      })
  }
  const getNewestData = (response: any) => {
    const array = response.data;
    console.log(array[array.length - 1])
    setSoil(array[array.length - 1].soil)
    setTemp(array[array.length - 1].temperature)
    setLight(array[array.length - 1].light)
  }
  const getData = () => {
    axios.get(getUrl() + '/data/' + getBuddyId() + '/getData')
      .then((response) => {
        getNewestData(response)
        setxAxis(response.data.map((data: { time: string }) => data.time))
        setyAxisTemp(response.data.map((data: { temperature: string }) => data.temperature))
        setyAxisSoil(response.data.map((data: { soil: string }) => data.soil))
        setyAxisLight(response.data.map((data: { light: string }) => data.light))

      })
  }
  if (fetch == true) {
    getType();
    setActiveChart('')
    setTitle('Buddy Chart')
    getData();
    setFetch(false);
  }

  return (
    <View style={style.container}>
      <View style={style.chart_container}>
        <Text style={style.text_c}>{title}</Text>
        {activeChart === 'temp' && (
          <LineChart
            data={{
              labels: xAxis,
              datasets: [{
                data: yAxisTemp
              }]
            }}
            width={Dimensions.get("window").width - 15} // from react-native
            height={230}
            fromZero={true}
            yAxisSuffix='°C'
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: "#005ECF",
              backgroundGradientTo: "#005691",
              decimalPlaces: 1,
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
              labels: xAxis,
              datasets: [{
                data: yAxisSoil
              }
              ]
            }}
            width={Dimensions.get("window").width - 15} // from react-native
            height={230}
            fromZero={true}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: "#005ECF",
              backgroundGradientTo: "#005691",
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
              labels: xAxis,
              datasets: [{
                data: yAxisLight
              }]
            }}
            width={Dimensions.get("window").width - 15} // from react-native
            height={230}
            fromZero={true}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: "#005ECF",
              backgroundGradientTo: "#005691",
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


      <Navbar />
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
    color: 'white',
    textAlign: 'right',
    fontSize: 20,
  },
  text_l: {
    color: 'white',
    fontSize: 20,
  },
  text_container: {
    backgroundColor: 'rgba(0,79,142,0.6)',
    width: Dimensions.get("window").width - 15,
    padding: 10,
    borderRadius: 15,
  },
  text_pair: {
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
    backgroundColor: 'rgb(0,79,142)',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgb(1,108,183)',
    width: '33%'
  },
  button_group: {
    flexDirection: 'row',
    width: Dimensions.get("window").width - 15,
    marginBottom: 15,
  },
  text_center: {
    textAlign: 'center',
    color: 'white',
  }
})