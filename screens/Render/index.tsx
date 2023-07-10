import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const RenderItem = ({itemData}) => {
  const item = itemData;

  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate('DetailScreen', item);
  };

  return (
    <TouchableOpacity style={styles.renderContainer} onPress={() => goDetail()}>
      <View style={styles.middleContainer}>
        <View style={styles.imageContianer}>
          <Image style={styles.itemImage} source={{uri: item?.thumbnailUrl}} />
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

export default RenderItem;
