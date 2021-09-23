import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js';
import SelectedBeastModal from './SelectedBeastModal.js'

// Component -start with an uppercase letter, every component must return something that can be rendered

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    }
  }

  showModal = () => {
    this.setState({
      showModal:true,
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false
    });
  }

  changeHornedBeast = (newHornedBeast) => {
    this.setState({
      selectedBeast: newHornedBeast,
      showModal: true,
    })
  }
  
  render() {
    return (
      <Container fluid>
        <Header title="Horned Beasts" />
        <Main changeHornedBeast = {this.changeHornedBeast} showModal={this.showModal}/>
         <Footer text="Andrea Powell"/>
         <SelectedBeastModal hornedBeast ={this.state.selectedBeast} showModal={this.state.showModal} hideModal={this.hideModal}/>
      </Container>
    );
  }
}
export default App;