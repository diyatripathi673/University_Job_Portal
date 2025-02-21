import React from "react";
import Navbar from "./components/shared/Navbar"
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

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
