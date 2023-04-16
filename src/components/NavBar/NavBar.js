import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const NavBar=()=>{
    return(
        <>
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MY FREADGE
          </Navbar.Brand>
        </Container>
            <Container>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/myfreadge">My Freadge</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
        </>
    );
}
export default NavBar;