<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import { booksDataApi } from './booksSlice'
import cartReducer from './cartSlice'
import imageLightBoxStatusReducer from './imageLightBoxStatus'
import { productPageSlice } from './productPageSlice'
export const store = configureStore({
	reducer: {
		[booksDataApi.reducerPath]: booksDataApi.reducer,
		[productPageSlice.reducerPath]: productPageSlice.reducer,
		cart: cartReducer,
		imageLightBoxStatus: imageLightBoxStatusReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			booksDataApi.middleware,
			productPageSlice.middleware
		),
})
=======
import { configureStore } from "@reduxjs/toolkit";
import { booksDataApi } from "./booksSlice";
// import {booksSlice }  from "./booksSlice";
import cartReducer from "./cartSlice";


export const store = configureStore({
    reducer: {
      [booksDataApi.reducerPath]: booksDataApi.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([booksDataApi.middleware]),
  });
  
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
