import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Community, Home } from './app/pages';
import { RootStackParamList } from './app/shared';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    /* Redux Toolkit */
    <Provider store={store}>
      <SafeAreaView style={styles.container}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              contentStyle: { backgroundColor: '#fff' }, // 전체 배경색 지정
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Community"
              component={Community}
              options={{
                title: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
