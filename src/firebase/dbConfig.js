import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAq5Ad097sPFXEoNL3MQjJY9PMdmqXPOVs",
  authDomain: "react2022-d96d1.firebaseapp.com",
  projectId: "react2022-d96d1",
  storageBucket: "react2022-d96d1.appspot.com",
  messagingSenderId: "602026559511",
  appId: "1:602026559511:web:1ff8ac68e6e1e6c311f452"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp =() => {
    return app
}