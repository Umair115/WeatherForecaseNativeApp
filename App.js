import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import MainComponent from './components/MainComponent';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, setStatus] = useState('');
  useEffect(() => {
    (async () => {
      let { cur_status } = await Location.requestPermissionsAsync();
      if (cur_status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setStatus(status)
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location.coords.latitude)
    
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if(location === null){
    return(
      <ActivityIndicator size="large" color='blue' style={{flex:1, justifyContent:"center"}}></ActivityIndicator>
    )
  }

  return (
  //   <View>
  // <View><Text>{Math.ceil(location.coords.latitude)}</Text></View>
  // <View><Text>{Math.ceil(location.coords.longitude)}</Text></View>
  // </View>
  
  <MainComponent lat={Math.ceil(location.coords.latitude)} lon={Math.ceil(location.coords.longitude)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});