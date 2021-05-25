import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsRYAvUFR8E5A8TCY-C7xQoWT9pgOKsoI",
    authDomain: "react-tms-e22ca.firebaseapp.com",
    projectId: "react-tms-e22ca",
    storageBucket: "react-tms-e22ca.appspot.com",
    messagingSenderId: "708852957756",
    appId: "1:708852957756:web:e41e4f811fb1845d7bf939"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};