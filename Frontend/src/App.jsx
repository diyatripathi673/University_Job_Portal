import React from "react";
import Navbar from "./components/shared/Navbar"
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDiscription from "./components/JobDescription";
import JobDescription from "./components/JobDescription";

const appRouter =createBrowserRouter([
  {
  
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path: '/browse',
    element: <Browse/>
  },
  {
    path:"/profile",
    element: <Profile/>

  }
])

function App() {
  return (
   <div>
  <RouterProvider router ={appRouter}/>
    </div>
  );
}

export default App;
