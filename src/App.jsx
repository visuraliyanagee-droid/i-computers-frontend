import { useState } from 'react'
import './App.css';
//import Test from './components/test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AdminPage from './pages/adminPage';
import Test from './pages/test.jsx';
import { Toaster } from 'react-hot-toast';

function App() {

return (

  <BrowserRouter>
        <Toaster position="top-right" />


  <div className="w-full h-screen bg-primary">

    <Routes path="/">

     <Route path="/*" element={<HomePage/>}/>
     <Route path="/admin/*" element={<AdminPage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/test" element={<Test/>}/>

   </Routes>

  </div>
  
  </BrowserRouter>

);
}

export default App;

