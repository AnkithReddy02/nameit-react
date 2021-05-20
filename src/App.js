import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import SearchBox from "./Searchbox";
import ResultsContainers from "./ResultsContainers";
// https://cutt.ly/WbBICFa

const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headerText: "Name it . ",
      textPresent: false,
      suggestedNames: []
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      textPresent: inputText,
      suggestedNames: name(inputText)
    });
  };

  // changing the specific value of state value of
  // manually does not re render again
  render() {
    return (
      <div>
        <Header
          textPresent={this.state.textPresent}
          headerTitle={this.state.headerText}
        />
        <SearchBox handleInputChange={this.handleInputChange} />
        <ResultsContainers suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
