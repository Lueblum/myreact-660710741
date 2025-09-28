import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import Category from './pages/CategoryPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
        {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />

          <Route path="/books" element={<BookDetailPage/>}/>

          <Route path="/category/fiction" element={<Category/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/contact" element={<Contact/>}/>

          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer />   */}
    </div>
  );
}

export default App;