import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Navbar } from 'react-bootstrap'


class HornForm extends Component {

    handleChange = event => {
        const userChoice = event.target.value;
        this.props.onSelect(userChoice);
        
    }
    render() {
        return (
            <Container >
            <Navbar bg = "dark" variant = "dark">
            <Navbar.Brand>How Many Horns?</Navbar.Brand>
            </Navbar>
            <Form>
            <Form.Select onChange={this.handleChange}>
            <option value="all">All Horns</option>
            <option value="odd">Odd Number of Horns</option>
            <option value="even">Even Number of Horns</option>
            </Form.Select>
            </Form>
            </Container>
            );
        }
    }

export default HornForm;