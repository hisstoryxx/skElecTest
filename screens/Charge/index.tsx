import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import axios from 'axios';
import RenderItem from '../Render';

const ChargeScreen = () => {
  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getData = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}`,
    );
    // .catch(error => console.log(error));
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
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

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
              renderItem={({item}) => <RenderItem itemData={item} />}
              keyExtractor={item => item.id}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChargeScreen;
