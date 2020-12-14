import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import RegisterScreen from '../../components/register/RegisterScreen';
import ListScreen from '../../components/list/ListScreen';
import NotificationsScreen from '../../components/notifications/NotificationsScreen';
import NotificationCreate from '../../components/notifications/NotificationCreate';
import NotificationDetails from '../../components/notifications/NotificationDetails';

import Colors from '../../res/Colors';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
          shadowColor: Colors.primary,
        },
        headerTitleAlign: 'center',
        headerTintColor: Colors.font,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='List' component={ListScreen} />
      <Stack.Screen name='Notifications' component={NotificationsScreen} />
      <Stack.Screen name='create' component={NotificationCreate} />
      <Stack.Screen name='Details' component={NotificationDetails} />
    </Stack.Navigator>
  );
};


export default HomeStack;