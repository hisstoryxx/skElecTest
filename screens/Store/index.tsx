import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';

const StoreScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>스토어</Text>
        <Text>lottie animation 3초뒤 사라짐</Text>
      </View>
      <Button title={'세로형 무한스크롤로 이동'} bottom={100} vertical={true} />
      <Button title={'가로형 무한스크롤로 이동'} bottom={30} vertical={false} />
    </SafeAreaView>
  );
};

export default StoreScreen;
