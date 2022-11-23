import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './minpages/Home';
import Calculator from './minpages/Calculator';
import Quote from './minpages/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
