import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from './images/image1.jfif'; // Certifique-se de que o caminho está correto
import image2 from './images/image2.jfif';
import image3 from './images/image3.jfif';


function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className = "nae" href="#home"><h7>NAE</h7></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><p>Perfil</p></Nav.Link>
            <Nav.Link href="#link"><p>Eventos</p></Nav.Link>
            <Nav.Link href="#link"><p>LogOut</p></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <h1>Eventos em destaque</h1>
      <Carousel 
        responsive={responsive}
        showDots={true} // Ativa as bolinhas de navegação
        dotListClass="custom-dot-list-style" // Classe para customizar os dots
        infinite={true} // Ativa rotação infinita do carousel
        autoPlay={false} // Define se deve rodar automaticamente
      >
        <div class="container">
          <img className="image-evento" src={image1} alt="Image 1" />
          <div class="bottom-left">Todos os cursos</div>
        </div>
        <div>
          <img className="image-evento" src={image2} alt="Image 2" />
        </div>
        <div>
          <img className="image-evento" src={image3} alt="Image 3" />
        </div>
        <div>
          <img className="image-evento" src={image1} alt="Image 1" />
        </div>
      </Carousel>
      <h2>Calendário</h2>
    </div>
    
    
  );
}

export default App;
