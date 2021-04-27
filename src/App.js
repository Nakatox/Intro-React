import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About" 
import NotFound from "./pages/NotFound";
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Crypto from './pages/Crypto';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/crypto" exact component={Crypto} />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
