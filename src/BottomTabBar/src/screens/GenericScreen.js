import React from "react";
import { Container, LargeText } from "./partials/Common";
import Home from "../../../Drawer/screens/Home";
import About from "../../../Drawer/screens/About";
import Settings from "../../../Drawer/screens/Settings";
import { useSelector, useDispatch } from "react-redux";

const GenericScreen = ({ title }) => {
  const screen = useSelector((state) => state.reducer.currentScreen);
  const clickedIndex = useSelector((state) => state.reducer.clickedIndex);
  const drawerEnable = useSelector((state) => state.reducer.drawerEnable);
  console.log("drawerEnable",drawerEnable);
  // console.log("screen",screen);
  // console.log("clickedIndex",clickedIndex);
  return (
    <Container>
      {( drawerEnable ? screen === "HomeScreen" : clickedIndex === 0) && <Home />}
      {( drawerEnable ?  screen === "AboutScreen" : clickedIndex === 1) && <About />}
      {( drawerEnable ?  screen === "SettingScreen" :clickedIndex === 2) && <Settings />}
    </Container>
  );
};

export default GenericScreen;
