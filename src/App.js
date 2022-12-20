import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Products from './screens/Products';
import Services from './screens/Services';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App
