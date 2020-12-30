import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { usecollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDsAKKu8ey3Wxxs4ToGrDgfvhkVrfhVbGg",
  authDomain: "superchat-8920f.firebaseapp.com",
  projectId: "superchat-8920f",
  storageBucket: "superchat-8920f.appspot.com",
  messagingSenderId: "375648404433",
  appId: "1:375648404433:web:745e50a6d563bf670256f0",
  measurementId: "G-CBDSP8KKC2",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
