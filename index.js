import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import configureStore from './includes/store';

const store = configureStore();

const ReduxOp = () =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent(appName, () => ReduxOp);

// AppRegistry.registerComponent(appName, () => App);
