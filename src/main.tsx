import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index.tsx'
import LoginForm from './login.tsx'
import './main.css'
import { store } from "./store";
import { Provider } from 'react-redux';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./main.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <LoginForm/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)

