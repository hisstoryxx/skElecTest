import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import RenderVertical from '../Render/RenderVertical';

import {useSelector, useDispatch} from 'react-redux';
import {photosSlice} from '../../store/photosSlice';
import {useNavigation} from '@react-navigation/native';

export interface Datas {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ChargeScreen = () => {
  const dispatch = useDispatch();
  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}
  const [datas, setDatas] = useState<Datas[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}`,
    );
    // .catch(error => console.log(error));
    dispatch(
      photosSlice.actions.addPhotosItem({
        photos: data?.data,
        current: currentPage,
      }),
    );
    setDatas([...datas, ...data?.data]);
  };

  // const renderItem = ({item}) => {
  //   return (
  //     <View style={styles.renderContainer}>
  //       <View style={styles.middleContainer}>
  //         <View style={styles.imageContianer}>
  //           <Image
  //             style={styles.itemImage}
  //             source={{uri: item?.thumbnailUrl}}
  //           />
  //         </View>
  //         <View style={styles.contentContainer}>
  //           <View style={styles.numberContainer}>
  //             <Text style={styles.textAlbum}>AlbumId : {item?.albumId}</Text>
  //             <Text style={styles.textId}>Id : {item?.id}</Text>
  //           </View>
  //           <Text
  //             numberOfLines={2}
  //             ellipsizeMode="tail"
  //             style={styles.textTitle}>
  //             Title : {item?.title}{' '}
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  const loadMoreItem = () => {
    // 불러올때 다음 페이지로 넘어가지 않게 예외처리
    if (!isLoading) {
      setCurrentPage(currentPage + 1);
    }
  };
  const addToPhotos = () => {
    console.log(datas);
    dispatch(photosSlice.actions.addPhotosItem({photos: datas}));
    console.log('run');
  };

  useEffect(() => {
    setIsLoading(true);
    getData();

    setIsLoading(false);
  }, [currentPage]);
  // useEffect(() => {
  //   addToPhotos();
  // }, [datas]);

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.paddingContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              공용 API 를 활용하여 세로형 무한스크롤 화면 구성
            </Text>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    // update selected photos
                    dispatch(photosSlice.actions.setSelectedphotos(item.id));
                    navigation.navigate('DetailScreen');
                  }}>
                  <View style={styles.renderContainer}>
                    <View style={styles.middleContainer}>
                      <View style={styles.imageContianer}>
                        <Image
                          style={styles.itemImage}
                          source={{uri: item?.thumbnailUrl}}
                        />
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
                          <Text style={styles.textAlbum}>
                            AlbumId : {item?.albumId}
                          </Text>
                          <Text style={styles.textId}>Id : {item?.id}</Text>
                        </View>
                        <Text
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          style={styles.textTitle}>
                          Title : {item?.title}{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )}
              keyExtractor={item => item.id}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChargeScreen;
