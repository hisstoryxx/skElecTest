import * as React from 'react';
import {View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {BottomTabParamList} from '../types';
import {createStackNavigator} from '@react-navigation/stack';
import TabStoreScreen from '../TabScreens/TabStoreScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomTab.Navigator initialRouteName="스토어">
        <BottomTab.Screen
          name="스토어"
          component={TabStoreNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/store_on.png')
                      : require('../assets/images/store_off.png')
                  }
                  resizeMode="contain"
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? Colors.light.tint
                      : Colors.light.tabIconDefault,
                    fontSize: 10,
                  }}>
                  스토어
                </Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="충전소"
          component={TabStoreNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/charge_on.png')
                      : require('../assets/images/charge_off.png')
                  }
                  resizeMode="contain"
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? Colors.light.tint
                      : Colors.light.tabIconDefault,
                    fontSize: 10,
                  }}>
                  충전소
                </Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="나"
          component={TabStoreNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/me_on.png')
                      : require('../assets/images/me_off.png')
                  }
                  resizeMode="contain"
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? Colors.light.tint
                      : Colors.light.tabIconDefault,
                    fontSize: 10,
                  }}>
                  나
                </Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="전체"
          component={TabStoreNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/images/whole_on.png')
                      : require('../assets/images/whole_off.png')
                  }
                  resizeMode="contain"
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? Colors.light.tint
                      : Colors.light.tabIconDefault,
                    fontSize: 10,
                  }}>
                  전체
                </Text>
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
};

const TabStoreStack = createStackNavigator<TabStoreParamList>();

const TabStoreNavigator = () => {
  return (
    <TabStoreStack.Navigator>
      <TabStoreStack.Screen
        name="TabStoreScreen"
        component={TabStoreScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
    </TabStoreStack.Navigator>
  );
};

export default BottomTabNavigator;
