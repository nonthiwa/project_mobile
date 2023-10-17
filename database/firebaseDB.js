import * as firebase from "firebase/compat";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkVoPorfLqJ78o2615fwkY05ixVcgxeVw",
  authDomain: "mobile-lab10-eb46b.firebaseapp.com",
  projectId: "mobile-lab10-eb46b",
  storageBucket: "mobile-lab10-eb46b.appspot.com",
  messagingSenderId: "191540488435",
  appId: "1:191540488435:web:d0c1674f48a0a7c7676f86",
  measurementId: "G-04JG1LR2PX"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;
