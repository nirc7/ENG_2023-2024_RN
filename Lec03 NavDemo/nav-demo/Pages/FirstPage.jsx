import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FirstPage(props) {
  return (
    <View>
      <Text>First Page</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('SecondPage'); }}>
        <Text style={{
          backgroundColor: 'grey', fontSize: 20, margin:10, padding:10,
          borderRadius: 5, borderWidth: 2, color:'yellow'
        }} > Goto Second Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.navigation.navigate('TabbedPageNavigator'); }}>
        <Text style={{
          backgroundColor: 'grey', fontSize: 20, margin:10, padding:10,
          borderRadius: 5, borderWidth: 2, color:'yellow'
        }} > Goto TabbedPageNavigator Page!</Text>
      </TouchableOpacity>
    </View >
  )
}

