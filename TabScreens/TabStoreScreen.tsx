import {createStackNavigator} from '@react-navigation/stack';
import Store from '../screens/Store';

const StoreStack = createStackNavigator();
const TabStoreScreen = () => {
  return (
    <StoreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StoreStack.Screen name="store" component={Store} />
    </StoreStack.Navigator>
  );
};

export default TabStoreScreen;
