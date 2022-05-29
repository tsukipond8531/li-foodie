import firebase  from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const config = {
  apiKey: process.env.REACT_APP_LIFOODIE_API_KEY,
  authDomain: process.env.REACT_APP_LIFOODIE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_LIFOODIE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_LIFOODIE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_LIFOODIE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_LIFOODIE_APP_ID
}

const App = firebase.initializeApp(config)

export const auth = getAuth();
export const db =  getFirestore(App);
export const storage = getStorage(App)
export default App;