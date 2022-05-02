import './styles/App.css';
import './styles/Footer.css'
import './styles/pages.css'
import React from 'react';
import Home from './pages/Home';
import AboutDave from './pages/AboutDave';
import Issues from './pages/Issues';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import HeadNav from './components/HeadNav';
import Footer from './components/Footer';


import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="Header">
        <HeadNav />
        <div>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/AboutDave'>
            <AboutDave />
          </Route>
          <Route exact path='/Issues'>
            <Issues />
          </Route>
          <Route exact path='/Events'>
            <Events />
          </Route>
          <Route exact path='/Volunteer'>
            <Volunteer />
          </Route>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
