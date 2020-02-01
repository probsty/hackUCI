// Store/configureStore.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers/storeReducers'; // the value from combineReducers

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-underscore-dangle
export const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__
    // eslint-disable-next-line no-underscore-dangle
    && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
