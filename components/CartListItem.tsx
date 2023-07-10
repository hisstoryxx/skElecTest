import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {cartSlice} from '../store/cartSlice';

const CartListItem = ({cartItem}) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({photoId: cartItem.photo.id, amount: 1}),
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        photoId: cartItem.photo.id,
        amount: -1,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: cartItem?.photo?.thumbnailUrl}}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>AlbumId {cartItem.photo?.albumId}</Text>
        <Text style={styles.size}>Id {cartItem.photo?.id}</Text>

        <View style={styles.footer}>
          <Pressable
            onPress={decreaseQuantity}
            style={{
              backgroundColor: 'gray',
              width: 24,
              height: 24,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24}}>-</Text>
          </Pressable>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable
            onPress={increaseQuantity}
            style={{
              backgroundColor: 'gray',
              width: 24,
              height: 24,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
  },
});

export default CartListItem;
