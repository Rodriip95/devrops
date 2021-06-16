import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8VhQP36ChLgyEZPzfYSc67l3qYPWN1ME",
    authDomain: "devrops-dev.firebaseapp.com",
    projectId: "devrops-dev",
    storageBucket: "devrops-dev.appspot.com",
    messagingSenderId: "1025716727189",
    appId: "1:1025716727189:web:007670b81bf11241e95a9c",
    measurementId: "G-5H3EYM1Z1H"
  };

export default function startFirebase(){
    return firebase.initializeApp(firebaseConfig);
}
