import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function TempView() {
  return (
    <View>
      <Text>임시</Text>
    </View>
  )
}

function CommunityTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TempView} />
      <Tab.Screen name="Profile" component={TempView} />
    </Tab.Navigator>
  );
}

export { CommunityTabBar }