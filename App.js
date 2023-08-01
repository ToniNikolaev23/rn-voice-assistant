import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppNavigation from './src/navigation';
import {apiCall} from './src/api/openAI';

const App = () => {
  // useEffect(() => {
  //   apiCall('create an image of a dog');
  // }, []);
  return <AppNavigation />;
};

export default App;
