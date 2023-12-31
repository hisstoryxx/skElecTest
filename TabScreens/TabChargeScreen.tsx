import {createStackNavigator} from '@react-navigation/stack';
import ChargeScreen from '../screens/Charge';
import DetailScreen from '../screens/DetailScreen';

const ChargeStack = createStackNavigator();
const TabChargeScreen = () => {
  return (
    <ChargeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChargeStack.Screen name="store" component={ChargeScreen} />
      <ChargeStack.Screen name="DetailScreen" component={DetailScreen} />
    </ChargeStack.Navigator>
  );
};

export default TabChargeScreen;
