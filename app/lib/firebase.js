import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdjopakHNu7-luOpxomjGdKoX-5sxu4d0",
  authDomain: "flashcardsass-280a1.firebaseapp.com",
  projectId: "flashcardsass-280a1",
  storageBucket: "flashcardsass-280a1.appspot.com",
  messagingSenderId: "210710183540",
  appId: "1:210710183540:web:b1c737e398a3f635519b21",
  measurementId: "G-E9YMMMCTV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null; // Avoid initialization in server-side

export { app, auth, googleAuthProvider};
