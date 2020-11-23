import React from 'react';
import { NavigationContainer } from  '@react-navigation/native'

import HomeStack from './src/container/home/HomeStack';

const App = () => {
  return (
    <NavigationContainer >
      <HomeStack />
    </NavigationContainer>
  );
};


export default App;
