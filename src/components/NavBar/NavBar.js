import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';


const NavBar=()=>{
    return(
        <>
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1189517657/vector/refrigerators-isolated-on-white-background-vector-illustration-of-a-sketch-style.jpg?s=1024x1024&w=is&k=20&c=lkgQdAeaFE6tBHT-u_H7T4GlCddk1aeEGKOuVTXrvwI="
              width="30"
              height="30"
              className="home"
            />{' '}
            MY Fridge
          </Navbar.Brand>
        </Container>
            <Container>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Favorates">My Fridge</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>
                    <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}
export default NavBar;