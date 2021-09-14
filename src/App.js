import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';


// Component -start with an uppercase letter, every component must return something that can be rendered

function App() {
  return (
    <div>
      <Header />
      <Main message={'Hi there'} />
      <Footer />
    </div>
  );
}


// message can be named anything 

export default App;