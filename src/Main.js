import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beasts from './data.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HornForm from './HornForm.js'
import NumberList from './NumberList.js';

const allNumbers = [0, 1, 2, 3, 9, 100];

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: allNumbers,
        }
    }

    handleSelect = (selectHorns) => {
        let updatedNumbers;

        if(selectHorns === 'odd') {
            updatedNumbers = allNumbers.filter(number => number % 2 === 1);
        } else if (selectHorns === 'even') {
            updatedNumbers = allNumbers.filter(number => number % 2 === 0);
        } else {
            updatedNumbers = allNumbers;
        }
        this.setState({
            numbers: updatedNumbers,
        });
    }
    
    render() {
        return (
            <Container fluid>
            <HornForm onSelect={this.handleSelect}/>    
            <NumberList numbers ={this.state.numbers}/>
            <Row xs={2} sm={3} md={4} lg={5}> 
            {beasts.map(beast => (<HornedBeast key={beast.title} beast={beast} changeHornedBeast ={this.props.changeHornedBeast} showModal={this.props.showModal}/>))}
            </Row>
            </Container>
        );
    }
}

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
     }
    
handleClick = () => {
    this.props.changeHornedBeast(this.props.beast);
    this.props.showModal();
}

handleClickCount = () => {
    this.setState({count: this.state.count + 1});
}

render() {
    return (
        <Card>
        <Card.Img onClick={this.handleClick} variant ="top" src ={this.props.beast.image_url} alt={this.props.beast.description}/>
        <Card.Body>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Text> {this.props.beast.description}</Card.Text>
        <Button onClick={this.handleClickCount} variant="danger">{'❤️ ' + this.state.count}</Button>
        </Card.Body>
        </Card>
        );
    }
}

export default Main;