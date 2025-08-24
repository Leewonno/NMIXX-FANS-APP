import React from 'react';
import styled from 'styled-components/native';
import { CommunityBoard, CommunityImageBox } from '../../features';
import { useDispatch } from 'react-redux';
import { setScrolled, setY } from '../../../store/scrollSlice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppText } from '../../shared';
import { AppDispatch } from '../../../store';

// Props
interface CommunityContentProps {
  name: string;
};

const Box = styled.ScrollView`
  width: 100%;
`;

const TabBox = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`

const Tab = createMaterialTopTabNavigator();

const CommunityContent = ({ name }: CommunityContentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    dispatch(setY(offsetY));
    dispatch(setScrolled(offsetY > 0));
  };

  return (
    <Box
      onScroll={handleScroll}
      stickyHeaderIndices={[1]}
      stickyHeaderHiddenOnScroll={false}
    >
      <CommunityImageBox name={name} />
      <TabBox>
        <Tab.Navigator initialRouteName='아티스트'
          screenOptions={{
            tabBarScrollEnabled: true, // 스크롤 가능하게 하면 왼쪽부터 쌓임
            tabBarIndicatorStyle: {
              backgroundColor: '#53a9ff',
            },
            tabBarItemStyle: {
              width: 'auto', // 탭 너비를 내용에 맞춤
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarContentContainerStyle: {
              justifyContent: 'flex-start', // 탭 전체를 왼쪽으로
              padding: 0,
              margin: 0,
            },
          }}>
          <Tab.Screen
            name="아티스트"
            children={() => <CommunityBoard category="아티스트" community={name} />}
            options={{
              tabBarLabel: ({ focused }) => (
                <AppText style={{
                  fontSize: 14,
                  color: focused ? '#53a9ff' : '#999' // 포커스된 것만 파란색
                }}>
                  아티스트
                </AppText>
              ),
            }} />
          <Tab.Screen
            name="팬"
            children={() => <CommunityBoard category="팬" community={name} />}
            options={{
              tabBarLabel: ({ focused }) => (
                <AppText style={{
                  fontSize: 14,
                  color: focused ? '#53a9ff' : '#999' // 포커스된 것만 파란색
                }}>
                  팬
                </AppText>
              ),
            }}
          />
        </Tab.Navigator>
      </TabBox>
      {/* <CommunityTabBar /> */}
      <CommunityBoard category='아티스트' community={name} />
    </Box>
  );
};

export { CommunityContent };