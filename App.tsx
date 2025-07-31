import React from 'react';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Edit1 from './tutorial/Edit1';
import Edit2 from './tutorial/Edit2';
import Edit3 from './tutorial/Edit3';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Edit1 />
      <Edit2 />
      <Edit3 />
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
