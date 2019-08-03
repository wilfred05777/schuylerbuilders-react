// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore' ;// <- needed if using firestore
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
// import * as firebase from 'firebase';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import 'firebase/storage' ;// <- needed if using storage
import 'firebase/functions'; // <- needed if using httpsCallable
// eslint-disable-next-line


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const firebaseConfig={
  apiKey: "AIzaSyBWFXyGslcF_DEXMLYoHkGZCOI2kx4kqJs",
  authDomain: "react-a80db.firebaseapp.com",
  databaseURL: "https://react-a80db.firebaseio.com",
  projectId: "react-a80db",
  storageBucket: "",
  messagingSenderId: "178432005481",
  appId: "1:178432005481:web:a0149303f08881b0"

}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
firebase.functions();// <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase), // <- needed if using firestore
  reactReduxFirebase(firebase, rrfConfig)// firebase instance as first argument
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
// Create Store
// const store = createStoreWithFirebase(rootReducer,initialState)

const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// const App =()=>(
//   <Provider store={store}>

//   </Provider>
// )


export default store;

