import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const API_URL = "https://s-nodejs-serverless-func-notion-cms.vercel.app"
  const PROJECT_ENDPOINT = "/api/project?id=b62818a9644b4b6281b8cce49719c945";
  const PROJECTS_ENDPOINT = "/api/projects";
  // (async () => {
  //   const response = await fetch(`${API_URL}${PROJECT_ENDPOINT}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // })();

  async function requestAPI() {
    const response = await fetch(`${API_URL}${PROJECT_ENDPOINT}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    return (<div><h1>Loading</h1></div>)
  }

  return (
    <>
      <h1>Static Website 🚀</h1>
      <div className="card">
        <p>
          Powered by Notion + Cloudinary
        </p>
        <button onClick={requestAPI}>
          Get Projects
        </button>
      </div>

    </>
  );
}

export default App;
/*
<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/