import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div className="sticky-top  ">
      <Navbar
        expand="lg"
        className="p-1 rounded-3  "
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 X">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutUs">About us</Nav.Link>
              <Nav.Link href="/VisitUs">Visit us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
