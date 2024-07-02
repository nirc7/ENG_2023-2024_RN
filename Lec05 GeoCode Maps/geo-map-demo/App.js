import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      console.log(process.env.EXPO_PUBLIC_API_KEY);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView style={{ width: 250, height: 250 }}
        initialRegion={{
          latitude: 32.34121616666969,
          longitude: 34.91297557038343,
          latitudeDelta: 0.009922,
          longitudeDelta: 0.009421, //
        }}
      >
        <Marker
          //key={index}
          coordinate={{ latitude: 32.34121616666969, longitude: 34.91297557038343 }}
          title="my title1"
          description="desc1"
        />
         <Marker
          //key={index}
          coordinate={{ latitude: 32.35131616666969, longitude: 34.91297557038343 }}
          title="my title1"
          description="desc1"
        />
      </MapView>
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.paragraph}>{location ? location.coords.longitude : '...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
