import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Header extends Component {
  render() {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        <>
          <h1>Header Content</h1>
        </>
      </Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
}

export default Header;