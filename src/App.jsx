import { useState } from 'react';
import { observer } from "mobx-react-lite";
//import './App.css';
import ProjectCollectionPresenter from './Presenters/ProjectCollectionPresenter';
import SuspenseStateView from './Views/SuspenseStateView';
import ProjectExtendedInfoPresenter from './Presenters/ProjectExtendedInfoPresenter';
import LayOutSandBox from './Presenters/LayOutSandBox';
//TODO ReactRouter
import {
  createBrowserRouter,
  createHashRouter,
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

//TODO RECALL that protected projects will firts take the use to the form. 
// For now, the URL with the key can work as a sharable free-access link
//?
function App(props) {

  function makeRouter(model) {
    //TODO createBrowserRouter
    return createHashRouter([
      {
        path: "/",
        element: <ProjectCollectionPresenter collection={model?.projectsCollection} />,
      },
      {
        path: "/project/:id",
        element: <ProjectExtendedInfoPresenter model={model} />,
      },
      {
        path: "/project/:id/:key",
        element: <ProjectExtendedInfoPresenter model={model} />,
      },
      {
        path: "/project/sanbox",
        element: <LayOutSandBox model={model} />,
      },
    ]);
  }

  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={makeRouter(props.model)} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default observer(App);