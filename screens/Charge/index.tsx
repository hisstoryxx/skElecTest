import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, FlatList} from 'react-native';
import styles from './styles';
import axios from 'axios';

const ChargeScreen = () => {
  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/photos/?albumId=${currentPage}
  const [datas, setDatas] = useState([]);
  //const [currentPage, setCurrentPage] = useState(0);

  const getData = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
    // .catch(error => console.log(error));
    setDatas([...datas, ...data?.data]);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderContainer}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'blue',
          }}>
          <View style={styles.imageContianer}>
            <Image
              style={styles.itemImage}
              source={{uri: item?.thumbnailUrl}}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.numberContainer}>
              <Text style={styles.textAlbum}>albumId : {item?.albumId}</Text>
              <Text style={styles.textId}>id : {item?.id}</Text>
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.textTitle}>
              title : {item?.title}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getData();
  }, []);

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
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChargeScreen;
