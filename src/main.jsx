import portfolioModel from './PortfolioModel.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global-style.css";

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig.js';
//import notionConfig from './notionConfig.js';

const app = initializeApp(firebaseConfig);

//Mobx configuration reaction
import { observable, configure, reaction } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions

await portfolioModel.requestProjectCollection();
const reactiveModel = observable(portfolioModel);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App model={reactiveModel} />
  </React.StrictMode>,
)
