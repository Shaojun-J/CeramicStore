import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/tableware" element={<ProductCategory/>} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
