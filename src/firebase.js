import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyARmesD84-IcUHaew4SoQDWQWUCFF6l_3w",
    authDomain: "react-blog-29329.firebaseapp.com",
    databaseURL: "https://react-blog-29329.firebaseio.com",
    projectId: "react-blog-29329",
    storageBucket: "react-blog-29329.appspot.com",
    messagingSenderId: "804797815485",
    appId: "1:804797815485:web:8136f5d447eebaea1375d4",
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
