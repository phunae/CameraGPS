import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import GetLocation from 'react-native-get-location';


export default function App() {
  var [loc, setLoc] = useState({})

  GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
  })
  .then(location => {
    console.log(location);
    setLoc(location)
  })
  .catch(error => {
    const { code, message } = error;
    console.warn(code, message);
  })
  return (
    <View style={styles.container}>
      <Button title = "Camera"/>
      <Text>assa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fgg',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
