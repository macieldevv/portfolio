import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDOVmEkvGWVGFSGfsWmRF5Ip1cJQXXDmiI",
    authDomain: "porfolio-d1154.firebaseapp.com",
    projectId: "porfolio-d1154",
    storageBucket: "porfolio-d1154.appspot.com",
    messagingSenderId: "281229639120",
    appId: "1:281229639120:web:913fbd2f9afb2136b70dd5"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };