import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';
// import RenderItem from '../Render/RenderScreen';
import RenderModal from '../Render/RenderModal';
import styles from './styles';

export interface Datas {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const MeScreen = () => {
  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}
  const [datas, setDatas] = useState<Datas[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [bannerWidth, setBannerWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}`,
    );
    // .catch(error => console.log(error));
    setDatas([...datas, ...data?.data]);
  };

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

  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, [currentPage]);

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setBannerWidth(width);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.paddingContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              공용 API 를 활용하여 가로형 무한스크롤 화면 구성
            </Text>
          </View>
          <View onLayout={onLayout} style={styles.listContainer}>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <RenderModal itemData={item} bannerWidth={bannerWidth} />
              )}
              keyExtractor={item => item.id}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              disableIntervalMomentum={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeScreen;
