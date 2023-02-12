//  import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,

  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (

      <div>
        <Router>

          <NavBar />
          <Routes>

            <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" />} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science" />} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business" />} />
            <Route exact path="/intertainment" element={<News key="intertainment" pageSize={6} country="in" category="intertainment" />} />

          </Routes>
        </Router>

      </div>

    );
  }
}