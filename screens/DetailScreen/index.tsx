import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import styles from './styles';

const DetailScreen = () => {
  const route = useRoute();
  const itemData = route.params;
  console.log(itemData);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
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
        <View style={styles.imageContianer}>
          <Image style={styles.itemImage} source={{uri: itemData?.url}} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.textAlbum}>AlbumId : {itemData?.albumId}</Text>
            <Text style={styles.textId}>Id : {itemData?.id}</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textTitle}>
            Title : {itemData?.title}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
