import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import NotificationsScreen from './NotificationsScreen';

const Stack = createStackNavigator();

const NotificationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={NotificationsScreen} />
    </Stack.Navigator>
  );
};


export default NotificationsStack;