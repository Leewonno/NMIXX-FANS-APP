import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import { Community, CommunityDetail, Create, Home, Login, Profile, SignUp } from './app/pages';
import { RootStackParamList } from './app/shared';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    /* Redux Toolkit */
    <Provider store={store}>
      <SafeAreaProvider>
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
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Community"
                component={Community}
                options={{
                  title: '',
                }}
              />
              <Stack.Screen
                name="Create"
                component={Create}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CommunityDetail"
                component={CommunityDetail} // 새로 만든 디테일 스크린
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
