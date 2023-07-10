import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import styles from './styles';

const StoreScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>스토어</Text>
        <Text>lottie animation 3초뒤 사라짐</Text>
      </View>
    </SafeAreaView>
  );
};

export default StoreScreen;
