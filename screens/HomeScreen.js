import { Button, PermissionsAndroid, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Buttons from '../components/UI/Buttons'
import BotNavigation from '../components/UI/BotNavigation'
import * as Location from "expo-location"
import axios from 'axios';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, seterrorMsg] = useState(null);
  const [coordinate, setCoordinate] = useState({
    'longitude': null,
    'latitude': null,
  })

  let data = {
    "LId": 1,
    "UserId": 200,
    "Latitude": JSON.stringify(coordinate.latitude),
    "Longitude": JSON.stringify(coordinate.longitude),
    "EntryDate": "2022-02-22T13:00:10.977",
    "ClientId": 6
  }

  const getLocatio = async () => {

    //   async ()=>{
    //     const {status} = await Location.requestForegroundPermissionsAsync();
    //     if (status !== "granted"){
    //         console.log("PERMISSION LACK!") 
    //     }
    //     seterrorMsg("granted")
    //     console.log("granted")
    //     const userLocation = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
    //     console.log("here")
    //     console.log(JSON.stringify(userLocation))
    //     setLocation( userLocation);
    // }
    

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("You can use the Location");
        const userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 });
        // console.log(userLocation)
        setCoordinate({
          'latitude': userLocation.coords.latitude,
          'longitude': userLocation.coords.longitude,
        })
        setLocation(JSON.stringify(userLocation));

      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
    
  }
  // console.log(coordinate)
  // console.log(data)
  useEffect(() => {
    // setInterval(() => {
    getLocatio()
    // }, 20000);
  }, [])

  function loadData(){
    const configuration ={
      url : 'http://lunivacare.ddns.net/CarelabDataMetricService_qc/Api/InsertupdateCollectorLocationDetails',
      method: 'POST',
      data: data,
    }
    axios(configuration)
    .then((response) => {
      if(response.status === 200){
        console.log("SucessFull")
      }else{
        console.log("error")
      }
    })
    .catch((err)=> {
      console.log('error')
    })
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button title='post' onPress={loadData}></Button>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})