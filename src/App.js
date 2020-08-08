import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {

  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
