import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const DetailScreen = () => {
  const route = useRoute();
  const itemData = route.params;
  // console.log(itemData);
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.back}>
        <View style={styles.navigatorBar}>
          <View style={styles.barContainer}>
            <TouchableOpacity onPress={goBack}>
              <Image
                source={require('../../assets/images/goLeft.png')}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.barTitleContainer}>
            <Text style={styles.barTitleText}>세부화면</Text>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <View>
            <Image
              style={{width: width, aspectRatio: 1}}
              source={{uri: itemData?.url}}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.numberContainer}>
              <Text style={styles.textAlbum}>
                AlbumId : {itemData?.albumId}
              </Text>
              <Text style={styles.textId}>Id : {itemData?.id}</Text>
            </View>
            <Text style={styles.textTitle}>Title : {itemData?.title} </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
