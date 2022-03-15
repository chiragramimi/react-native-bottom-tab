import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, TouchableHighlight} from 'react-native';
import Screen from '../screens/GenericScreen';
import styled from 'styled-components/native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
// import AppLoading from 'expo-app-loading';
// import {useFonts} from 'expo-font';
// import MyCustomIconSet from '../assets/fonts/MyIconSet.ttf'

const Tab = createBottomTabNavigator();

const BottomTabNavigatorStyle2 = props => {
  const [focusedTab, setFocusedTab] = useState(0);
  const clickedIndex = useSelector(state => state.reducer.clickedIndex);
  const mappable = [0, 1, 2, 3, 4];
  const screen = useSelector(state => state.reducer.currentScreen);
  const dispatch = useDispatch();

  const colors = mappable.map((item, index) => {
    return useState(
      (index===clickedIndex) ? new Animated.Value(1) : new Animated.Value(0),
    )[0];
  });

  const iconSizes = mappable.map((item, index) => {
    return useState(
      (index===clickedIndex) ? new Animated.Value(40) : new Animated.Value(28),
    )[0];
  });

  const boxSizes = mappable.map((item, index) => {
    return useState(
      (index===clickedIndex) ? new Animated.Value(70) : new Animated.Value(50),
    )[0];
  });

  const topMargins = mappable.map((item, index) => {
    return useState(
      (index===clickedIndex) ? new Animated.Value(-45) : new Animated.Value(-10),
    )[0];
  });

  useEffect(() => {
    colors.forEach((c, index) => {
      let value = (index === clickedIndex) ? 1 : 0;
      Animated.timing(c, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    iconSizes.forEach((s, index) => {
      let value = (index === clickedIndex) ? 40 : 28;
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    boxSizes.forEach((s, index) => {
      let value = (index === clickedIndex) ? 70 : 50;
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    topMargins.forEach((s, index) => {
      let value = (index === clickedIndex) ? -45 : -10;
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  }, [clickedIndex]);

  const bgColorAnimation = c =>
    c.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(74,74,74)', 'rgb(82,224,84)'],
    });

  // let [fontsLoaded] = useFonts({
  //   'MyCustomIconSet': MyCustomIconSet,
  // });

  const icons = {
    home: 'home',
    about: 'user-alt',
    settings: 'tools',
  };

  // if (!fontsLoaded) {
  //   return <AppLoading/>;
  // } else {

  const TabWrapper = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
    align-content: center;
  `;

  const IconWrapper = styled(Animated.View)`
    position: relative;
    width: 70px;
    height: 70px;
    justify-content: center;
    margin-top: -10px;
    border-radius: 35px;
  `;

  const Icon = styled(Animated.Text)`
    // font-family: "MyCustomIconSet";
    color: white;
    padding: 10px;
    text-align: center;
    color: ${props => props.color};
  `;

  const TabBarBg = styled.View`
    background-color: #eaeaea;
    display: flex;
    flex: 1;
  `;

  const pages = [
    {
      title: 'Home Screen',
      icon: icons.home,
    },
    {
      title: 'About Screen',
      icon: icons.about,
    },
    {
      title: 'Settings Screen',
      icon: icons.settings,
    },
  ];
  const onTabPress = () => {
    console.log("clickedIndex",clickedIndex);
    switch (clickedIndex) {
      case 0:
        dispatch({ type: 'CLICK_DRAWER', payload: 'HomeScreen' });
        dispatch({type: 'DRAWER_ENABLE', payload: false});
        break;

      case 1:
        dispatch({ type: 'CLICK_DRAWER', payload: 'AboutScreen' });
        dispatch({type: 'DRAWER_ENABLE', payload: false});
        break;

      case 2:
        dispatch({ type: 'CLICK_DRAWER', payload: 'SettingScreen' });
        dispatch({type: 'DRAWER_ENABLE', payload: false});
        break;

      default:
        console.log('Error');
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute'},
        tabBarBackground: () => <TabBarBg />,
      }}>
      {pages.map((page, index) => (
        <Tab.Screen
          name={page.title}
          options={{
            tabBarIcon: ({focused}) => (
              <TabWrapper>
                <IconWrapper
                  style={{
                    backgroundColor: bgColorAnimation(colors[index]),
                    marginTop: topMargins[index],
                    width: boxSizes[index],
                    height: boxSizes[index],
                    alignItems: 'center',
                  }}>
                  <Icon1
                    style={{fontSize: 30}}
                    color={focused ? 'black' : 'white'}
                    name={page.icon}
                  />
                </IconWrapper>
              </TabWrapper>
            ),
          }}
          listeners={{
            tabPress: e => {
              dispatch({ type: 'CLICK_INDEX', payload: index });
              onTabPress();
            },
          }}>
          {props => <Screen {...props} title={page.title} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
  // }
};

export default BottomTabNavigatorStyle2;
