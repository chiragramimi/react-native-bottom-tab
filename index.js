/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/Drawer/navigation/MainDrawer';
import App from './src/MainNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
