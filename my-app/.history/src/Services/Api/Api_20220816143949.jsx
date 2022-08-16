import firebase,{ initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import FirebaseConfig from '../Firebase/Firebaseconfig'

const firebaseApp = firebase.initializeApp(FirebaseConfig);
const db = firebaseApp.firestore();

export default {
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await 
    }
}
