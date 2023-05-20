import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { iniciarFirebase } from './firebase/config';

iniciarFirebase();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
