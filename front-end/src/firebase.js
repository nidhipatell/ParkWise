import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBTakjXZbo5TalbAuiQpY5h_hWzf6M2YK0",
  authDomain: "parkwise-5aa66.firebaseapp.com",
  databaseURL: "https://parkwise-5aa66.firebaseio.com",
  projectId: "parkwise-5aa66",
  storageBucket: "parkwise-5aa66.appspot.com",
  messagingSenderId: "308900642279",
  appId: "1:308900642279:web:0dac1044fd48205eb01142"
})

export const auth = app.auth()
export default {app}