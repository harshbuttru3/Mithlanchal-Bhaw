import { useState } from 'react'
import React from 'react';

// components 
import Landing from './components/Landing';
import Footer from './components/Footer';
import BlogGrid from './components/Blog';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <Landing/>
    <Intro/>
    <BlogGrid></BlogGrid>

    <Footer/>
     </>
  )
}

export default App
