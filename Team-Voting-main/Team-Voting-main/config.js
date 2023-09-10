import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCoaRUrbkthsmU2xGpvy_C_r21iZGXPC6w",
  authDomain: "team-voting-app-2be68.firebaseapp.com",
  projectId: "team-voting-app-2be68",
  storageBucket: "team-voting-app-2be68.appspot.com",
  messagingSenderId: "126924225315",
  appId: "1:126924225315:web:06b198359dd9233a6caa96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();