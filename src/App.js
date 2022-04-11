import "./App.css";
import React from "react";
import web3 from './web3';
import lottery from './Lottery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={manager: ''};
  }
  async componentDidMount() {
    const manager=await lottery.methods.manager().call();
    this.setState({manager: manager})
  }
  render() {
    console.log(web3.version);
    return (
      <div className="App">
        <h2>{this.state.manager}</h2>
      </div>
    );
  }
}
export default App;
