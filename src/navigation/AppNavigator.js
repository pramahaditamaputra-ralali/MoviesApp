import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

const Stack = createStackNavigator();

const themeNavbar = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="Movies"
        component={MainScreen}
        options={{...themeNavbar}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({route}) => ({
          ...themeNavbar,
          title: route.params.name,
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
