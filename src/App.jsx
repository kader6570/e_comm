import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage'
import CategoryPage from '../src/components/Category/CategoryPage';
import ContactPage from './shop/pages/ContactPage';
import ProductDetailPage from '../src/components/ProductDetail/ProductDetailPage';
import NotFound from './shop/pages/NotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:categoryName' element={<CategoryPage/>}/>
        <Route path='/product/:productId' element={<ProductDetailPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
