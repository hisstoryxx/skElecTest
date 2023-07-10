import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newPhoto = action.payload.photo;
      console.log('new', newPhoto);
      const cartItem = state.items.find(i => i.photo.id === newPhoto.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({photo: newPhoto, quantity: 1});
      }
    },
    changeQuantity: (state, action) => {
      const {photoId, amount} = action.payload;
      const cartItem = state.items.find(item => item.photo.id === photoId);
      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});

export const selectNumberOfItems = state => state.cart.items.length;

export const selectTotal = state =>
  state.cart.items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
