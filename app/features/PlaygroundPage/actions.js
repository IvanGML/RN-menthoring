import {
  firebaseApp
} from '../../firebase/index';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_PERSONAL_DATA = 'FETCH_PERSONAL_DATA';

const fetchData = () => dispatch => {
  let progressBarData = [];
  let personalDataFetched = {};
  let id = firebaseApp.auth().currentUser.uid;
  firebaseApp.database().ref().child(`users/${id}/skills`)
    .once('value', snap => {
      snap.forEach(child => {
        progressBarData.push({
          title: child.val().title,
          progress: child.val().progress,
          id: child.key,
        })
      });
    })
    .then(() => {
      dispatch({
        type: FETCH_DATA,
        payload: progressBarData
      })
    })

  firebaseApp.database().ref().child(`users/${id}/personalData`)
  .once('value', snap => {
    snap.forEach(child => {
      let property = {[child.key]: child.val()};
      personalDataFetched = {
        ...personalDataFetched,
        ...property
      }
    });
  })
  .then(() => {
    dispatch({
      type: FETCH_PERSONAL_DATA,
      payload: personalDataFetched
    })
  })
}

// const fetchPersonalData = () => dispatch => {
  
// }

export {
  FETCH_PERSONAL_DATA,
  FETCH_DATA,
  fetchData,
};