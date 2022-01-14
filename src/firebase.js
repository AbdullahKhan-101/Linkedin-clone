import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoQUIZrpBtcf2HX2QscLe_7OTwhAOszIc",
  authDomain: "linkedin-clone-c45a2.firebaseapp.com",
  projectId: "linkedin-clone-c45a2",
  storageBucket: "linkedin-clone-c45a2.appspot.com",
  messagingSenderId: "1029604723930",
  appId: "1:1029604723930:web:f2f83a7d02d97ec328a9e3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
