import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import MainBottomTab from '../../BottomTabBar/src/navigators/MainBottomTab';
import BottomTabNavigatorStyle2 from '../../BottomTabBar/src/navigators/BottomTabNavigatorStyle2';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../Redux//actions';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = props => {
  const screen = useSelector(state => state.reducer.currentScreen);
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label={"Home"}
        labelStyle={styles.drawerLblStyle}
        onPress={() => {
          props.navigation.navigate('Home');
          dispatch({type: 'DRAWER_ENABLE', payload: true});
          dispatch({type: 'CLICK_DRAWER', payload: 'HomeScreen'});
          dispatch({type: 'CLICK_INDEX', payload: 0});
        }}
      />
      <DrawerItem
        label="About"
        labelStyle={styles.drawerLblStyle}
        onPress={() => {
          props.navigation.navigate('About');
          dispatch({type: 'DRAWER_ENABLE', payload: true});
          dispatch({type: 'CLICK_DRAWER', payload: 'AboutScreen'});
          dispatch({type: 'CLICK_INDEX', payload: 1});
        }}
      />
      <DrawerItem
        label="Settings"
        labelStyle={styles.drawerLblStyle}
        onPress={() => {
          props.navigation.navigate('Settings');
          dispatch({type: 'DRAWER_ENABLE', payload: true});
          dispatch({type: 'CLICK_DRAWER', payload: 'SettingScreen'});
          dispatch({type: 'CLICK_INDEX', payload: 2});
        }}
      />
    </DrawerContentScrollView>
  );
};
const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          // headerShown:false,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Image
                source={require('../assets/menu.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigatorStyle2}
        />
        <Stack.Screen
          name="About"
          component={BottomTabNavigatorStyle2}
        />
        <Stack.Screen
          name="Settings"
          component={BottomTabNavigatorStyle2}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};
export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <LinearGradient style={styles.container} colors={['#d303fc', '#0384fc']}>
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens" options={{headerShown: false}}>
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});
