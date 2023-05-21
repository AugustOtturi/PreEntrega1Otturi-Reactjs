import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAUIcgR9aVxsbncbPa5bPx4TjkqLT_oxM8',
    authDomain: 'reactjscoderhouse-a81ed.firebaseapp.com',
    projectId: 'reactjscoderhouse-a81ed',
    storageBucket: 'reactjscoderhouse-a81ed.appspot.com',
    messagingSenderId: '329128339152',
    appId: '1:329128339152:web:723ef2ebdaf0b5750e60d5',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const iniciarFirebase = () => app;
