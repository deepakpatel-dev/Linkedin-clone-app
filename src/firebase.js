 import firebase from 'firebase';
 //import * as firebase from 'firebase';
 //import firebase from 'firebase/app';
 //import 'firebase/auth';
 //import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHf-rUzO45A9HsN7mgE73VL9zPSYBOJ_A",
  authDomain: "linkedin-d4074.firebaseapp.com",
  projectId: "linkedin-d4074",
  storageBucket: "linkedin-d4074.appspot.com",
  messagingSenderId: "658827887644",
  appId: "1:658827887644:web:427118b2d9cc63a0174bd9",
  measurementId: "G-1D7D3T7LRZ"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore(); 
 const  auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage(); 
 
 export {auth, provider, storage};
 export default db;
 