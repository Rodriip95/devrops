import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FS_API_KEY,
    authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FS_DATABASE_URL,
    projectId: process.env.REACT_APP_FS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FS_APP_ID,
    measurementId: process.env.REACT_APP_FS_MEASUREMENT
  };

export default function startFirebase(){
    return firebase.initializeApp(firebaseConfig);
}
