import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.4,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const btnImgUpload = () => {

    console.log(image);
    imageUpload(image, 'cp1.jpeg');
  }

  imageUpload = (imgUri, picName) => {
    let urlAPI = "https://niryael1234.bsite.net/api/files/upload";
    let dataI = new FormData();
    dataI.append('file', { //HERE File not picture!!!
      uri: imgUri,
      name: picName,
      type: 'image/jpeg'
    });

    const config = {
      method: 'POST',
      body: dataI,
    }

    fetch(urlAPI, config)
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          console.log(res.status);
          return res.json();
        }
        else { return "err"; }
      })
      .then((responseData) => {
        console.log(responseData);
        if (responseData != "err") {
          console.log(responseData.filePath);
        }
        else { alert('error uploding ...'); }
      })
      .catch(err => { alert('err upload= ' + err); });
  }
  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Upload image " onPress={btnImgUpload} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
