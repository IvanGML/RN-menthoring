import { firebaseApp } from '../../firebase/';

const setToFB = (id, payload) => firebaseApp.database().ref().child(`users/${id}/personalData`).set(payload);

export { setToFB };