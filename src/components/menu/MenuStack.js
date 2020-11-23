import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import MenuScreen from './MenuScreen';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={MenuScreen} />
    </Stack.Navigator>
  );
};


export default MenuStack;