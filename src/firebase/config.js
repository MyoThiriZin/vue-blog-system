
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBIirEtOvHVKpHOLLhw2FQhSXIdtA2beE",
    authDomain: "vue-blog-system-6b3f4.firebaseapp.com",
    projectId: "vue-blog-system-6b3f4",
    storageBucket: "vue-blog-system-6b3f4.appspot.com",
    messagingSenderId: "706603042305",
    appId: "1:706603042305:web:997d655e56f79c6be4e200",
    measurementId: "G-GJCXS4FDMT"
  };

//   init firebase
firebase.initializeApp(firebaseConfig);

// database setup

let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp
export {db,timestamp};