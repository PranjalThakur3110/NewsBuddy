import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Newsfeed from './components/Newsfeed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Newsfeed key="general" pageSize={this.pageSize} country="in" category="general" />} />
            {/* <Route path="/about" element={<Newsfeed pageSize={this.pageSize} country="in" category="general" />} /> */}
            <Route exact path="/business" element={<Newsfeed key="business"pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<Newsfeed key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<Newsfeed key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<Newsfeed key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<Newsfeed key="science"  pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<Newsfeed key="sports"  pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<Newsfeed key="technology"pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
