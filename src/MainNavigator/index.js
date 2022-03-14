import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from '../Drawer/navigation/Drawer';
import store from '../Redux//store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
