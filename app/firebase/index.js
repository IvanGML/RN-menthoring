import * as firebase from 'firebase';
import { skills } from './skills';
import { personalData } from './personalData';
import { userInit } from '../redux/actions/mainActions';
const firebaseConfig = {
  apiKey: "AIzaSyDDMdVBDt7ob9WHXyHXC8p83vQjMdlbLbQ",
  authDomain: "epamer-d320a.firebaseapp.com",
  databaseURL: "https://epamer-d320a.firebaseio.com",
  projectId: "epamer-d320a",
  storageBucket: "epamer-d320a.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

let id;

var appUser;
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    let { email, uid } = user;
    id = uid;
    firebaseApp.database().ref().child(`users/${uid}/skills`)
      .once('value', snapshot => {
        var exists = (snapshot.val() !== null);
        if (!exists) {
          firebaseApp.database().ref(`/users/${user.uid}/`).set({skills, personalData});
        }
      })

    // firebaseApp.database().ref(`/users/${user.uid}/`).set({skills, personalData});
  } else {

  }
})

// firebaseAp.auth().currentUser ?  firebaseApp.auth().currentUser.uid : null;

export {
  id,
  appUser,
  firebaseApp
};