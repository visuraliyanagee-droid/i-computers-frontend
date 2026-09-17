import { useState } from 'react'
import './App.css';
//import Test from './components/test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AdminPage from './pages/adminPage';

function App() {

return (

  <BrowserRouter>

  <div className="w-full h-screen bg-primary">

    <Routes path="/">
     <Route path="/home" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<RegisterPage/>}/>
     <Route path="/admin" element={<AdminPage/>}/>

   </Routes>

  </div>
  
  </BrowserRouter>

);
}

export default App;
