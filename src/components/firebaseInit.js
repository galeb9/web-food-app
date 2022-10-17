import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// konfiguracija za naš projekt
const firebaseConfig = {
    apiKey: "AIzaSyC2MKdMfLb9I3cxbVMLyzGUpywBG5PnwSI",
    authDomain: "order-food-app-f84eb.firebaseapp.com",
    projectId: "order-food-app-f84eb",
    storageBucket: "order-food-app-f84eb.appspot.com",
    messagingSenderId: "619856318874",
    appId: "1:619856318874:web:3a788ce14fccd9113cea23",
    measurementId: "G-53GSLJ6TBJ"
};

// inicijalizacija firebase projekta
const firebaseApp = firebase.initializeApp(firebaseConfig);

// uporaba baze podatkov firestore & firebase avtentikacije
const db = firebaseApp.firestore();
const auth = firebase.auth();

// Izvoz za uporabo v komponentah in drugje
export { auth, db, firebase };
