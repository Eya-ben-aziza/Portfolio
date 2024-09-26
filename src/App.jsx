import React from 'react'
import About from './components/about';
import MainLayout from './layouts/MainLayout'
import Experiences from './components/Experiences';


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';


const router= createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<MainLayout/>}>
      <Route path='/about' element={<About/>} />
      <Route path='/experiences' element={<Experiences/>} />
    </Route>
      
    
    

  )
 
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App
