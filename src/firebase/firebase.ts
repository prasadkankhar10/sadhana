import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCbV3H_HhwK39sgj4A8UghvgK1W1TY1bpw',
  authDomain: 'sadhana-prasad.firebaseapp.com',
  projectId: 'sadhana-prasad',
  storageBucket: 'sadhana-prasad.appspot.com',
  messagingSenderId: '654502924214',
  appId: '1:654502924214:web:ba5a346ce6b75ab07abb17',
  measurementId: 'G-HR010HP0RC',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
