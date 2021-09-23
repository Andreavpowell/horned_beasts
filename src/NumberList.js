import {Component} from 'react';
import ListGroup  from 'react-bootstrap/ListGroup';

class NumberList extends Component {
    render() {
        return (
            <ListGroup>
            {this.props.numbers.map(number => (
                <ListGroup.Item key={number}></ListGroup.Item>
        ))}
        </ListGroup>
        );
    }
}
export default NumberList;