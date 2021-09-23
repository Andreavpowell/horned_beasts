import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import beastBios from './data.json';
import Image from 'react-bootstrap/Image';



class SelectedBeastModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: beastBios,
    };
  };

  handleClick = (event) => {
    this.props.showModal(this.props.title);
    this.setState({
      count: this.state.count + 1 ,
    });
  };

  render () {
    return (
      <Col>
      <Card style ={{width: '20rem'}}>
      <h2> {this.props.title}</h2>
      <Image src ={this.props.image_url} alt ={this.props.alt} title={this.props.title} onClick={this.handleClick} />
      <p>{this.props.description}</p>      
      <p> ♥ {this.state.count}</p>
      </Card>
      </Col>
    )
  }
  }

export default SelectedBeastModal