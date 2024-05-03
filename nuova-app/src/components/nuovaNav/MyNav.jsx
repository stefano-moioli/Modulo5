import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'

const MyNav = ({ searchQuery, setSearchQuery }) => {

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Row>
              <Col className='d-flex'>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Button className='bg-dark'>Search</Button>
            </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
