
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { ItemsPage } from './Pages/Home/ItemPage/ItemsPage';



function App() {
  return (
    <div className="App">
      <Router>

    <Switch>

      <Route exact path="/">

    <Home/>
      </Route >
      <Route path="/Items">

    <ItemsPage />
      </Route>
    </Switch>
      </Router>
    </div>
  );
}

export default App;
