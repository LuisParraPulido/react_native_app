import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const RegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};


export default RegisterStack;