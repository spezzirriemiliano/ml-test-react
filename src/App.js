import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, /*Link,*/ Route } from 'react-router-dom';
import Detail from './components/containers/detail/Detail';
import Results from './components/containers/results/Results';
import SearchBox from './components/commons/search-box/SearchBox';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="page-container">
          <SearchBox/>
          <div>
            <Route path="/" exact render={
              () => <div className="home-fake-img-container"><img src="/images/ml_fake_home.jpeg" alt="" /></div>
              }></Route>
            <Route path="/items" exact component={Results}></Route>
            <Route path="/items/:id" exact component={Detail}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
