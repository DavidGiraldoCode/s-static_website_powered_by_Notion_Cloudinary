import { useState } from 'react';
import { observer } from "mobx-react-lite";
import './App.css';
import ProjectCollectionPresenter from './Presenters/ProjectCollectionPresenter';
import SuspenseStateView from './Views/SuspenseStateView';

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      {props.model.projectsCollection == null ? <SuspenseStateView /> : <ProjectCollectionPresenter collection={props.model.projectsCollection} />}
    </div>
  );
}

export default observer(App);
/*
<h1>Static Website 🚀</h1>
      <div className="card">
        <p>
          Powered by Notion + Cloudinary
        </p>
        <button onClick={e => console.log("Click!")}>
          Get Projects
        </button>
        <p>
          
        </p>
      </div>
<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/