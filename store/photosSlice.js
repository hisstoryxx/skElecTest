import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  selectedphotos: null,
  currents: null,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotosItem: (state, action) => {
      const newPhotos = action.payload.photos;
      const current = action.payload.current;
      // const cartItem = state.items.find(i => i.product.id === newProduct.id)
      //  if(cartItem){
      //      cartItem.quantity +=1
      //  } else {
      //      state.items.push({product: newProduct, quantity: 1});
      //  }

      if (newPhotos.length !== 0) {
        state.photos.push({photos: newPhotos});
        console.log('new', newPhotos);
        state.currents = current;
      }
      //   console.log(
      //     'next',
      //     state.photos,
      //     JSON.parse(JSON.stringify(state.photos))[current - 1],
      //   );
    },
    setSelectedphotos: (state, action) => {
      const photosId = action.payload;
      const page = state.currents;
      if (!state.photos) {
      }

      state.selectedphotos = JSON.parse(JSON.stringify(state.photos))[
        page - 1
      ].photos.find(p => p.id === photosId);
      console.log(state.currents);
      console.log(photosId);
    },
  },
});
