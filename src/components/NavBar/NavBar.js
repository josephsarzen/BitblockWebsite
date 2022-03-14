import { 
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import BitblockLogo from '../../assets/images/BitblockLogo.png'
import React, { useState, } from 'react';
import './NavBar.css'
  
const NavBar = () => {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
        <MDBNavbar expand='lg' light bgColor='primary' scrolling fixed="top">
          <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            Bitblock
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink href='/'>
                Home
              </MDBNavbarLink>
              <MDBNavbarLink href='/browse'>Browse</MDBNavbarLink>
              <MDBNavbarLink href='/upload'>Upload a Video</MDBNavbarLink>
              <MDBNavbarLink href='/whitepaper'>White Paper</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );
  }
  
  export default NavBar;
  
  /*
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  */