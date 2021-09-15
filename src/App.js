import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import imageUrls from './data.json'
import Container from 'react-bootstrap/Container';


// Component -start with an uppercase letter, every component must return something that can be rendered

function App() {
  return (
    <Container>
      <Header title="Beast Judge"/>
      <Main message='Make Your Beast Opinion Known! Click on the image of your favorite horned creature.' imageUrls={imageUrls} />
      <Footer text="See which beast people like most!"/>
      </Container>
  );
}


// message can be named anything 

export default App;