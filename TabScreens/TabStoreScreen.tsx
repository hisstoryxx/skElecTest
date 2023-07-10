import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import Store from '../screens/Store';
import styles from './styles';

const StoreStack = createStackNavigator();
const TabStoreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  // lottie animation
  if (!isLoading) {
    return (
      <View style={styles.loading}>
        {/* <LottieView source={require('./assets/Lottie.json')} autoPlay loop /> */}

        <LottieView
          autoPlay
          ref={animation}
          speed={10}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../assets/lottie/Lottie.json')}
        />
      </View>
    );
  }

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
