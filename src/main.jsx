import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global-style.css";
//import './index.css'

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
