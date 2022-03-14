import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import BottomTabNavigatorStyle2 from './BottomTabNavigatorStyle2';
function App(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigatorStyle2"
        component={BottomTabNavigatorStyle2}
      />
    </Stack.Navigator>
  );
}

export default App;
