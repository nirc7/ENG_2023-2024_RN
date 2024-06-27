import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

export default function FirstPage(props) {

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('focus');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('unfocus');
      };
    }, [])
  );


  return (
    <View>
      <Text>First Page</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('SecondPage', { user: 'Lucy' + new Date().getSeconds() }); }}>
        <Text style={{
          backgroundColor: 'grey', fontSize: 20, margin: 10, padding: 10,
          borderRadius: 5, borderWidth: 2, color: 'yellow'
        }} > Goto Second Page!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.navigation.navigate('TabbedPageNavigator'); }}>
        <Text style={{
          backgroundColor: 'grey', fontSize: 20, margin: 10, padding: 10,
          borderRadius: 5, borderWidth: 2, color: 'yellow'
        }} > Goto TabbedPageNavigator Page!</Text>
      </TouchableOpacity>
    </View >
  )
}

