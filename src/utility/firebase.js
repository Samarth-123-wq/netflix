import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWo6a6mEtRaA2e0z79AetX6rnePTyEupI",
  authDomain: "netflix-fd7a5.firebaseapp.com",
  projectId: "netflix-fd7a5",
  storageBucket: "netflix-fd7a5.firebasestorage.app",
  messagingSenderId: "554288161498",
  appId: "1:554288161498:web:dfe5e45498ec24f7bd3be3",
  measurementId: "G-CC449WVMQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
