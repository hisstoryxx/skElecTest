import {configureStore} from '@reduxjs/toolkit';

import {photosSlice} from './photosSlice';
import {cartSlice} from './cartSlice';

export const store = configureStore({
  reducer: {
    photos: photosSlice.reducer,
    cart: cartSlice.reducer,
  },
});
