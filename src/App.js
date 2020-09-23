import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firebase';
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyC6zKr3NGUTfLM_2wuWWagb5U1Kg2NhsH0",
  authDomain: "chat-plaform.firebaseapp.com",
  databaseURL: "https://chat-plaform.firebaseio.com",
  projectId: "chat-plaform",
  storageBucket: "chat-plaform.appspot.com",
  messagingSenderId: "134221553507",
  appId: "1:134221553507:web:5795ebc5d24b01ad98fd56",
  measurementId: "G-M66M207DX8"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  return (
    <div className="App">
{user ? <ChatRoom />: <SignIn/>}
    </div>
  );
}

export default App;
