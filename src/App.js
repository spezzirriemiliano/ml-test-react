import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Detail from './containers/detail/Detail';
import Results from './containers/results/Results';
 
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>Barra de busqueda</div>
          <div> Links...
            <Link to={'/search'}>Search</Link>
            <Link to={'/results'}>Result</Link>
            <Link to={'/detail'}>Detail</Link>
          </div>
          <div>
            <Route path="/items" exact component={Results}></Route>
            <Route path="/items/:id" exact component={Detail}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
