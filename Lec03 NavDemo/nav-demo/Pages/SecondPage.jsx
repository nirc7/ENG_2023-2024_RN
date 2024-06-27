import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SecondPage(props) {
  return (
    <View>
      <Text>Second Page</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('FirstPage'); }}>
        <Text style={{
          backgroundColor: 'grey', fontSize: 20,
          borderRadius: 5, borderWidth: 2, color: 'yellow'
        }} > Goto First Page!</Text>
      </TouchableOpacity>
      <Text> {   props.route?.params.user ?? '...'}
      </Text>
      <Text> {   props.route.params ? props.route.params.user : '...'}
      </Text>
    </View>
  )
}