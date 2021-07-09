import '../App.css';
import React from 'react';
import Display from './Display';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const { ...data } = this.state;
    const results = calculate(data, buttonName);
    this.setState({
      total: results.total,
      next: results.next,
      operation: results.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display results={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
