import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAv61J7hZi2quzoXuvsGx-Q-mmX9WNvDdQ",
  authDomain: "ice-cream-app-545eb.firebaseapp.com",
  projectId: "ice-cream-app-545eb",
  storageBucket: "ice-cream-app-545eb.appspot.com",
  messagingSenderId: "107565991219",
  appId: "1:107565991219:web:4a3583e35842c6454a6a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);