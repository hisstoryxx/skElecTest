import {createStackNavigator} from '@react-navigation/stack';
import ChargeScreen from '../screens/Charge';

const ChargeStack = createStackNavigator();
const TabChargeScreen = () => {
  return (
    <ChargeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChargeStack.Screen name="store" component={ChargeScreen} />
    </ChargeStack.Navigator>
  );
};

export default TabChargeScreen;
