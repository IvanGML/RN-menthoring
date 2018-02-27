import { step } from './constants';
import {firebaseApp} from '../../firebase/';

const range = number => {
  if (number < 0) {
    return number + step;
  }
  if (number > 100) {
    return number - step;
  } 
  return number;
}

const setToFB = (id, payload) => firebaseApp.database().ref().child(`users/${id}/skills`).set(payload);

export {
  range,
  setToFB
}
