import HomePage from '../src/Components/homepage.js';
import './App.css';
import AboutUs from '../src/Components/aboutus.js';
import Gallery from '../src/Components/gallery.js';
import ContactUs from '../src/Components/contactus.js';
import NavBar from '../src/Components/navbar.js';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    
    </div>
    
  );
}

export default App;
