import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { Button as BtnEl} from '@rneui/themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [num, setNum] = useState(0);

  const btnAddOne = () => {
    let num2 = 7;
    num2++;
    console.log(num);
    setNum(perNum => perNum + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>Ruppin's app!</Text>

      <View style={{ margin: 10 }}>
        <Button title='Add One' onPress={btnAddOne} />
      </View>

      <TouchableOpacity onPress={btnAddOne}>
        <View style={{
          backgroundColor: 'lightgreen',
          borderColor: 'yellow',
          borderWidth: 2, 
          padding:15, 
          margin:5, 
          borderRadius:10
        }}>
          <Text>AddOne 2</Text>
        </View>
      </TouchableOpacity>

      <BtnEl title="Outline" type="outline"  onPress={btnAddOne}/>

      <Text>num= {num}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: windowHeight * .05
  },
});
