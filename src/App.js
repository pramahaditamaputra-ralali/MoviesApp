import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './rematch/store';
import AppNavigator from './navigation/AppNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
