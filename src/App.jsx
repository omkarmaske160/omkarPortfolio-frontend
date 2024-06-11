import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Protected from './middleware/Protected';
import Layout from './pages/Layout';
import Dashboard from './admin/Dashboard';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/protected' element={<Protected />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App