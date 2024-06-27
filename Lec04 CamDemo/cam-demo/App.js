import { useState } from 'react';
import { Button, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [picUri, setPicUri] = useState('https://reactjs.org/logo-og.png')

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const btnSnap = async () => {
    if (camera) {
      //const data = await camera.takePictureAsync(null);
      const data = await camera.takePictureAsync({ quality: 0.001 });
      console.log(data.uri)
      (data.uri);
    }
  }

  btnGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (!result.canceled) {
      setPicUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}
        ref={ref => setCamera(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={btnSnap}>
            <Text style={styles.text}>Snap</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Image src={picUri} style={{
        width: 200, height: 200, alignSelf: 'center',
        alignItems: 'center', margin: 10
      }} />
      <TouchableOpacity style={[styles.button, {flexDirection:'row',   margin:10,justifyContent:'center'}]} onPress={btnGallery}>
        <Text style={[styles.text , {color:'black'} ]}>FromGallery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 0.5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    fontSize: 10
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});