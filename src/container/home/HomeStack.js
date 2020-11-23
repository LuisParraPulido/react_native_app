import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import RegisterScreen from '../../components/register/RegisterScreen';
import ListScreen from '../../components/list/ListScreen';
import NotificationsScreen from '../../components/notifications/NotificationsScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='List' component={ListScreen} />
      <Stack.Screen name='Notifications' component={NotificationsScreen} />
    </Stack.Navigator>
  );
};


export default HomeStack;