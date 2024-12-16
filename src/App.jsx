import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Form from './Components/form';
import Protect from './Components/protectedRotue';
import { useUserContext } from './context/usercontext';
import { verifyToken } from './api';
import  DragDropList from './Components/drag&drop';

function App() {
  const context=useUserContext();
  (async function (){
      const {status,user}=await verifyToken();
      console.log(user);
      context.user=user;
      await context.funAuth(status);
    })();  

  const routes=createBrowserRouter([{
    path:"/",
    element:<Form/>
  },{path:"/drop",element:<DragDropList/>},context.isAuth?{
    path:"/me",
    element:<Protect/>
  }:{}]);

  return (
      <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
