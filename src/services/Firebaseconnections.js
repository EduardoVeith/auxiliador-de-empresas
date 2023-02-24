import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDNYi2foTorMqYRgo7F3P-2mCZXnpuehtY",
  authDomain: "sistema-veith.firebaseapp.com",
  projectId: "sistema-veith",
  storageBucket: "sistema-veith.appspot.com",
  messagingSenderId: "792318934435",
  appId: "1:792318934435:web:998a5c4092714e62aaee16",
  measurementId: "G-83PLTHDHM4"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase