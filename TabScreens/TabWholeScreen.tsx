import {createStackNavigator} from '@react-navigation/stack';

import WholeScreen from '../screens/Whole';

const WholeStack = createStackNavigator();
const TabWholeScreen = () => {
  return (
    <WholeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <WholeStack.Screen name="whole" component={WholeScreen} />
    </WholeStack.Navigator>
  );
};

export default TabWholeScreen;
