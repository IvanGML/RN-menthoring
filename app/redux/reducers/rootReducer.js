import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import firebaseConnection from '../../features/LogoPage/reducer';
import fetchReducer from '../../features/PlaygroundPage/reducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  userInfo: firebaseConnection,
  userData: fetchReducer
});

export default rootReducer;
