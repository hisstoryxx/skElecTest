import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

import FastImage from 'react-native-fast-image';

const RenderHorizontal = ({
  itemData,
  // bannerWidth,
  setEachData,
  modalVisible,
  setModalVisible,
}) => {
  const [imgLoad, setImgLoad] = useState(false);

  const item = itemData;

  const navigation = useNavigation();

  const goDetail = () => {
    setEachData(item);
    setModalVisible(true);
  };

  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[styles.renderContainer, {width: width - 60}]}
      onPress={() => goDetail()}>
      <View style={styles.middleContainer}>
        <View style={styles.imageContianer}>
          <Image style={styles.itemImage} source={{uri: item?.thumbnailUrl}} />
          {/* {!imgLoad && (
            <FastImage
              style={styles.itemImage}
              source={require('../../../assets/images/pholder.png')}
            />
          )}
          <FastImage
            style={[styles.itemImage, imgLoad ? {} : {width: 0, height: 0}]}
            source={{
              uri: `${item?.thumbnailUrl}`,
            }}
            onLoadEnd={() => setImgLoad(true)}
            resizeMode={FastImage.resizeMode.contain}
          /> */}
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.textAlbum}>AlbumId : {item?.albumId}</Text>
            <Text style={styles.textId}>Id : {item?.id}</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textTitle}>
            Title : {item?.title}{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderHorizontal;
