import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import layout from './hocs/Layout'
import Home from './components/Home';
import Category from './components/Category';
import BlogDetail from './components/BlogDetail';
import Blog from './components/Blog';
import Navbar from './components/Navbar';

const App = () => (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog/' element={<Blog />}></Route>
        <Route path='/category/:id/' element={<Category />}></Route>
        <Route path='/blog/:id/' element={<BlogDetail />}></Route>
      </Routes>
    </Router>
)

export default App;