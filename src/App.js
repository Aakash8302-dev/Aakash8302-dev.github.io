import './App.css';
import About from './components/About'
import Cv from './components/Cv'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import javascript from './images/javascript.png'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Cv />
        <Work />
        <div className="slanted-container"> 

         </div>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
