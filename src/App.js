import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

const Foo = () => (
  <div>
    <h2>Page 'foo'</h2>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route  exact path = '/'>
          <Homepage />
        </Route>
        <Route path = '/foo'>
          <Foo />
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
