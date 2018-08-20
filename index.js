/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewRNLayout from './NewRNLayout';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent("NewRNLayout", () => NewRNLayout);
