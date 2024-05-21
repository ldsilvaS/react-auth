import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7YxDs7mBSSzJ4ORgpzs62VkkrnTzI-5Q",
  authDomain: "react-auth-b10a3.firebaseapp.com",
  projectId: "react-auth-b10a3",
  storageBucket: "react-auth-b10a3.appspot.com",
  messagingSenderId: "1005346242637",
  appId: "1:1005346242637:web:629e9bbab28377d3825c04"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);