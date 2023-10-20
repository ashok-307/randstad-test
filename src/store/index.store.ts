import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleWare from 'redux-thunk';
import ReduxQueryAPI from './apis/redux.store.api';
import StarShipsStoreSlice from './slices/star-ships.store.slice';

const configureAppStore = (preloadedState: any = {}) => {
    const store = configureStore({
        reducer: {
            [ReduxQueryAPI.reducerPath]: ReduxQueryAPI.reducer,
            starShips: StarShipsStoreSlice
        },
        middleware: (getMiddleware) => {
            return [...getMiddleware(), ThunkMiddleWare, ReduxQueryAPI.middleware];
        },
        preloadedState
    });
    return store;
};

export default configureAppStore;
