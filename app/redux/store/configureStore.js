import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/rootReducer';
import { persistReducer, persistStore  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
}

// const persistedReducer = persistReducer(persistConfig, RootReducer)

const middlewares = [thunk, logger];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

let store = createStore(RootReducer, {}, enhancer)
let persistor = persistStore(store)

export { store, persistor };

