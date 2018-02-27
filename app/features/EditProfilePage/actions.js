import { SET_NEW_PERSONAL_DATA } from './constants';
import { setToFB } from './helpers';

const setAge = (payload, id) => {
  setToFB(id, payload);
  return {
    type: SET_NEW_PERSONAL_DATA,
    payload
  }
}

export {
  setAge
};