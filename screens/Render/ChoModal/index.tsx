import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

import FastImage from 'react-native-fast-image';

const ChoModal = ({itemData, modalVisible, setModalVisible}) => {
  const [imgLoad, setImgLoad] = useState(false);

  const item = itemData;

  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (modalVisible) {
      resetBottomSheet.start();
    }
  }, [modalVisible]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <View style={styles.back}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          {/* <View style={styles.navigatorBar}>
            <View style={styles.barContainer}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/goLeft.png')}
                  resizeMode="contain"
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.barTitleContainer}>
              <Text style={styles.barTitleText}>세부화면</Text>
            </View>
          </View> */}

          <View style={styles.middleContainer}>
            <View style={styles.imageContianer}>
              <Image
                style={styles.itemImage}
                source={{uri: item?.url}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.numberContainer}>
                <Text style={styles.textAlbum}>AlbumId : {item?.albumId}</Text>
                <Text style={styles.textId}>Id : {item?.id}</Text>
              </View>
              <Text style={styles.textTitle}>Title : {item?.title} </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ChoModal;
