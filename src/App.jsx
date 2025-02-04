import Portfolio from './pages/Portfolio';


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';


const router= createBrowserRouter (
  createRoutesFromElements (
      <Route path='/portfolio' element={<Portfolio/>}/>
  )
 
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App
