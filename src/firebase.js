import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfElFiWYYPhj0fYCXBsP55L1qr_Fyj2iE",
  authDomain: "itadakimasu-app-321.firebaseapp.com",
  projectId: "itadakimasu-app-321",
  storageBucket: "itadakimasu-app-321.appspot.com",
  messagingSenderId: "413848348032",
  appId: "1:413848348032:web:ef796fc6a158ad49434d65",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export default firebase;
