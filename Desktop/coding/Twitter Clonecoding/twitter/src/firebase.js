import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD5SWbgS6ut9SKE1dmvl_aQhVe-PMckiQM",
    authDomain: "mysns-77ece.firebaseapp.com",
    projectId: "mysns-77ece",
    storageBucket: "mysns-77ece.appspot.com",
    messagingSenderId: "56008027243",
    appId: "1:56008027243:web:01a4e9e981751123b5552e"
  };

  const app = initializeApp(firebaseConfig);

  export default firebase.initializeApp(firebaseConfig);