import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import CartListItem from '../../components/CartListItem';

const PhotosDetail = () => {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>10 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>10 US$</Text>
      </View>
    </View>
  );
};

const WholeScreen = () => {
  const cartItems = useSelector(state => state.cate.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={PhotosDetail}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default WholeScreen;
