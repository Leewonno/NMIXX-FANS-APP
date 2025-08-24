import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { CommunityBoard } from '../../features';

const Tab = createMaterialTopTabNavigator();

const TabBox = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
  background-color: yellow;
`

const TestView = styled.View`
  background-color: yellow;
  height: 1000px;
  width: 100px;
  z-index: 9999;
`

function CommunityTabBar() {
  return (
    <TabBox>
      <Tab.Navigator>
        <Tab.Screen name="아티스트">
          {() => <CommunityBoard category="아티스트" />}
        </Tab.Screen>
        <Tab.Screen name="팬">
          {() => <CommunityBoard category="팬" />}
        </Tab.Screen>
        <Tab.Screen name="팬2" component={TestView} />
      </Tab.Navigator>
    </TabBox>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     , // 이게 없으면 화면 안 나옴
//   },
// });

export { CommunityTabBar }