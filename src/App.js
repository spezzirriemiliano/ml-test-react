import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, /*Link,*/ Route } from 'react-router-dom';
import Detail from './containers/detail/Detail';
import Results from './containers/results/Results';
import SearchBox from './components/search-box/SearchBox';
 
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="page-container">
          <SearchBox/>
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
