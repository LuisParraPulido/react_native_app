import React from 'react';
import { NavigationContainer } from  '@react-navigation/native'

import RegisterStack from './src/components/register/RegisterStack';
import MenuStack from './src/components/menu/MenuStack';
import ListStack from './src/components/list/ListStack';
import NotificationsStack from './src/components/notifications/NotificationsStack';

const App = () => {
  return (
    <NavigationContainer >
      <RegisterStack />
    </NavigationContainer>
  );
};


export default App;
