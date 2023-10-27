import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
 
} from "react-router-dom";
import Students from './Pages/Students';
import Add from './Pages/Add';
import Update from './Pages/Update';

const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Students/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/update/:id' element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App