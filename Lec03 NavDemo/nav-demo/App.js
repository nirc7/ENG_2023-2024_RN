import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';
// import MaterialTabbedPage from './Pages/MaterialTabbedPage';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'FirstPage' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'SecondPage' }}
      />
      <Drawer.Screen
        name="TabbedPageNavigator"
        component={MaterialTabbedPageNavigator}
        options={{ drawerLabel: 'Tabbed' }}
      />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="TabbedPageNavigator" component={MaterialTabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
export default App;