import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./global-style.css";
//import './index.css'
//TODO import 'dotenv/config';
//TODO import dotenv from 'dotenv';
//TODO dotenv.config();
//TODO console.log(process.env.REACT_APP_NOTION_KEY);
console.log(import.meta.env.REACT_APP_NOTION_KEY);

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig.js';
import notionConfig from './notionConfig.js';

const app = initializeApp(firebaseConfig);

//TODO --------- Notion

import { Client } from '@notionhq/client';

const notion = new Client({ auth: notionConfig.NOTION_API_KEY });

(async () => {
  const blockId = notionConfig.REACT_APP_NOTION_PAGE_ID;
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });
  console.log(response);
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
