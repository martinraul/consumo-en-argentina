import React from "react";
import Header from "./components/header.js";
import Home from "./components/home.js";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import {Card1, Card2, Card3, Card4,Card5, Card6, Card7, Card8} from "./components/cards.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card1" component={Card1} />
          <Route path="/card2" component={Card2} />
          <Route path="/card3" component={Card3} />
          <Route path="/card4" component={Card4} />
          <Route path="/card5" component={Card5} />
          <Route path="/card6" component={Card6} />
          <Route path="/card7" component={Card7} />
          <Route path="/card8" component={Card8} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
