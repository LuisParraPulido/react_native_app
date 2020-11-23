import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import ListScreen from './ListScreen';

const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={ListScreen} />
    </Stack.Navigator>
  );
};


export default ListStack;