import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice'

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
