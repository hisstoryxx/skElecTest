import {createStackNavigator} from '@react-navigation/stack';

import MeScreen from '../screens/Me';
const MeStack = createStackNavigator();
const TabMeScreen = () => {
  return (
    <MeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MeStack.Screen name="store" component={MeScreen} />
    </MeStack.Navigator>
  );
};

export default TabMeScreen;
