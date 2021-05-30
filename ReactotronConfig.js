// Reactotron.config.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

export default Reactotron.configure({
  name: 'MovieDB',
  host: scriptHostname,
})
  .use(reactotronRedux())
  // add other devtools here
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
