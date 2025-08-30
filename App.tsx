import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import { Community, CommunityDetail, Create, Home, Login, My, Profile, SignUp } from './app/pages';
import { RootStackParamList } from './app/shared';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackParamList } from './app/shared/types/stack';
import HomeFillIcon from './assets/icons/home_fill.svg'
import HomeIcon from './assets/icons/home.svg'
import MyFillIcon from './assets/icons/my_fill.svg'
import MyIcon from './assets/icons/my.svg'

const Stack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();

// Home 탭 안에 Stack 넣기
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Community" component={Community} />
      <HomeStack.Screen name="CommunityDetail" component={CommunityDetail} />
      <HomeStack.Screen name="Create" component={Create} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}

// Bottom Tab 정의
function Main() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabel: () => null, tabBarStyle: { height: 60 } }}>
      <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused ?
              <HomeFillIcon width={25} height={25} />
              :
              <HomeIcon width={25} height={25} />
            )
          ),
        }}
      />
      <Tab.Screen name="My" component={My}
        options={{
          tabBarIcon: ({ focused }) => (
            (focused ?
              <MyFillIcon width={25} height={25} />
              :
              <MyIcon width={25} height={25} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    /* Redux Toolkit */
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
              {/* 로그인 이후 Bottom Tab 화면 */}
              <Stack.Screen name="Main" component={Main} />
              {/* 로그인 관련 화면 */}
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
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
