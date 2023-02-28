import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    users: usersReducer,
    singleUser: singleUserReducer,
    orders: ordersReducer,
    singleOrder: singleOrderReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
