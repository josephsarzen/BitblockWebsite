import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import WhitePaper from './components/WhitePaper/WhitePaper';
import { MDBContainer } from 'mdb-react-ui-kit';
import BrowseVideos from './components/BrowseVideos/BrowseVideos';
import UploadVideo from './components/UploadVideo/UploadVideo';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <MDBContainer style={{paddingTop: 70}}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/whitepaper' element={<WhitePaper />}/>
          <Route path='/upload' element={<UploadVideo />}/>
          <Route path='/browse' element={<BrowseVideos />}/>
        </Routes>
        </MDBContainer>
    </BrowserRouter>
  );
}

export default App;