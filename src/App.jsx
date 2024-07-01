import { useState } from 'react';
import { observer } from "mobx-react-lite";
import './App.css';
import ProjectCollectionPresenter from './Presenters/ProjectCollectionPresenter';
import SuspenseStateView from './Views/SuspenseStateView';
import ProjectExtendedInfoPresenter from './Presenters/ProjectExtendedInfoPresenter';
//TODO ReactRouter
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//TODO TankStack
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(props) {
  const makeRouter = (model) => createBrowserRouter([
    {
      path: "/project/:id",
      element: <ProjectExtendedInfoPresenter model={props.model}/>,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application 
      <div className='app'>
        {props.model.projectsCollection == null ? <SuspenseStateView /> : <ProjectCollectionPresenter collection={props.model.projectsCollection} />}
      </div>*/}
      <RouterProvider router={makeRouter(props.model)} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
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