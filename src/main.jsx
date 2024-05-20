import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import About from './components/Main/About.jsx';
import Project from '../src/components/Main/Project.jsx'
import Experience from './components/Main/Experience.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <About/>,
  },
  {
    path: "/experience",
    element: <Experience/>,
  },
  {
    path: "/project",
    element: <Project/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
