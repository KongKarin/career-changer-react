import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Admin from './Admin'
import Login from './Login'
import Signup from './Signup'
import UserContext from './UserContext';
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/Admin',
    element: <Admin />
  },

  {
    path: '/Signup',
    element: <Signup />
  },

  {
    path: '/Login',
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
)
