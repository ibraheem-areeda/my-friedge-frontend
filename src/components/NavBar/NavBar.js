import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import logo from './logo.png'
const NavBar=()=>{
    return(
        <>

        <div className='header'></div>
          <Navbar bg="light" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MY FRIDGE
          </Navbar.Brand>
        </Container>
            <Container>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Favorates">My Fridge</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
        </>
    );
}
export default NavBar;