import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ColorSchemeName} from 'react-native/types';
import ChargeScreen from '../screens/Charge';
import MeScreen from '../screens/Me';
import TabChargeScreen from '../TabScreens/TabChargeScreen';
import {RootStackParamList} from '../types';
import BottomTabNavigator from './BottomTabNavigator';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ChargeScreen"
          component={TabChargeScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MeScreen"
          component={MeScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
