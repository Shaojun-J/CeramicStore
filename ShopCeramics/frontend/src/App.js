import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import MyCart from './pages/MyCart';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/mycart" element={<MyCart/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
