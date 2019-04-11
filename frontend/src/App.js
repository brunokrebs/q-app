import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Question from "./Components/Question/Question";
import Questions from "./Components/Questions/Questions";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Questions} />
        <Route exact path="/question/:questionId" component={Question} />
      </div>
    );
  }
}

export default App;
