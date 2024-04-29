import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index.tsx'
import './main.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
