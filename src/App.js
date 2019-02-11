import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Detail from './containers/detail/Detail';
import Results from './containers/results/Results';
import SearchBox from './components/search-box/SearchBox';
 
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="prueba">
          <SearchBox/>
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
