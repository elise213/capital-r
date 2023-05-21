'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NewNavbar = () => {
  return (

    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light" id="navbar">
      <div className="container-fluid">
        <Link href={'/'} className="">
          <Image width={200} height={50} alt="" className="" navbar-logo src={'/img/CAPITALRLOGO7.png'} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p className="navbar-toggler-icon"></p>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: '0' }}>
          <div className="ml-auto nav-content"></div>
          <span className="nav-item">
            <Link href="/" className='nav-btn'>HOME</Link>
          </span>
          <span className="nav-item">
            <Link href="/services" className="nav-btn">SERVICES</Link>
          </span>
          <span className="nav-item">
            <Link href="/contact" className="nav-btn">CONTACT</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
