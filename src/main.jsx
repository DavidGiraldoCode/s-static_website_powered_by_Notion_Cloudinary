import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global-style.css";
//import './index.css'
// import 'dotenv/config';
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.REACT_APP_NOTION_KEY);
//console.log(import.meta.env.REACT_APP_NOTION_KEY);

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig.js';
//import notionConfig from './notionConfig.js';

const app = initializeApp(firebaseConfig);



// --------- Notion

// import { Client } from '@notionhq/client';

// const notion = new Client({ auth: notionConfig.NOTION_ACCESS_TOKEN });

// (async () => {
//   const databaseId = notionConfig.NOTION_DATABASE_ID;
//   const response = await notion.databases.retrieve({ database_id: databaseId });
//   console.log(response);
// })();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
