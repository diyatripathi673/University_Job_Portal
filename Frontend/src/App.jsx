import React from "react";
import Navbar from "./components/ui/shared/Navbar";
import Signup from "./components/ui/auth/Signup";
import Login from "./components/ui/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/ui/auth/Home";

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
