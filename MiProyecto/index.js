/**
 * @format
 */

import {AppRegistry} from 'react-native';

import Main from './src/pages/Main';
import PanResponderPage from './src/pages/PanResponderPage';
import ModulesPage from './src/pages/ModulesPage';



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
