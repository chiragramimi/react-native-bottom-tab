import React from "react";
import { Container, LargeText } from "./partials/Common";
import Home from '../../../Drawer/screens/Home';
import About from '../../../Drawer/screens/About';
import Settings from '../../../Drawer/screens/Settings';
import {useSelector, useDispatch} from 'react-redux';

const GenericScreen = ({ title }) => {
 const screen = useSelector(state => state.reducer.currentScreen);
  return (
    <Container>
      {screen==='HomeScreen' && <Home/>}
      {screen === 'AboutScreen' && <About />}
      {screen==='SettingScreen' && <Settings/>}
    </Container>
  )
}

export default GenericScreen
