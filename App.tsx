import React, { Children } from 'react';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import Edit1 from './tutorial/Edit1';
// import Edit2 from './tutorial/Edit2';
// import Edit3 from './tutorial/Edit3';
import { Home } from './app/pages';
import { Footer, Header } from './app/widgets';
import { NewAppScreen } from '@react-native/new-app-screen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header/> */}
      <Home />
      {/* <Footer /> */}
      {/* <Edit1 /> */}
      {/* <Edit2 /> */}
      {/* <Edit3 /> */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
