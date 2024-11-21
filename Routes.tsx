import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator initialRouteName={"HOME_SCREEN"}>
        <Tab.Screen
          name={"HOME_SCREEN"}
          component={HomeScreen}
          options={{title: "Home" }}
        />
        <Tab.Screen
          name={"PROFILE_SCREEN"}
          component={AccountScreen}
          options={{title: "Account" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const MyTheme = {
  ...DefaultTheme,
};
