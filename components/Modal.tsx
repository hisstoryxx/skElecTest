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
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import FastImage from 'react-native-fast-image';
import Colors from '../constants/Colors';

const Modals = ({itemData, modalVisible, setModalVisible}) => {
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

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  middleContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: Colors.light.imageBackground,
  },
  itemImage: {
    // width: '70%',
    // height: '70%',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    width: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'purple',
    //justifyContent: 'space-around',
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textAlbum: {
    fontSize: 16,
  },
  textId: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 20,
  },
});
export default Modals;
