import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FirstTabPage from './FirstTabPage';
import SecondTabPage from './SecondTabPage';
import { Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialTabbedPageNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="FirstTabPage"
      activeColor="#55ff00"
      inactiveColor='black'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="FirstTabPage"
        component={FirstTabPage}
        options={{
          tabBarLabel: <Text style={{
            fontSize: 9, fontWeight: '700',
            color: 'white'
          }}> My Tickets </Text>,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SecondTabPage"
        component={SecondTabPage}
        options={{
          tabBarLabel: 'Second Page',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="baseball" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}