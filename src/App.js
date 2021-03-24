import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
      
    </div>
    </BrowserRouter>

  );
}

export default App;
