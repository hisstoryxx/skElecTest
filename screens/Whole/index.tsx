import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import CartListItem from '../../components/CartListItem';
import {selectSubtotal, selectTotal} from '../../store/cartSlice';

const PhotosDetail = () => {
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} count</Text>
      </View>
    </View>
  );
};

const WholeScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  console.log('cart', cartItems);
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
