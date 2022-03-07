import React from 'react'

import { Footer, Blog, Possibility, WhatBitBlock, Header, Features } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'

export const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatBitBlock />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;