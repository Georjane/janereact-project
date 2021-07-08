import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Hi extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      fname: name,
      value: '',
      counter: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCounter = this.handleAddCounter.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAddCounter() {
    const { fname, value, counter } = this.state;
    this.setState({ counter: counter + 1 });
    this.setState({ fname });
    this.setState({ value });
  }

  render() {
    const {
      fname, value, counter,
    } = this.state;
    return (
      <div>
        <h1>
          Hi
          {' '}
          {fname}
          !
        </h1>

        <br />
        <input type="text" onChange={this.handleChange} />
        <h2>
          You are typing
          {' '}
          {value}
        </h2>
        <p>
          Our count is
          {' '}
          {counter}
          {' '}
          <Counter clickHandler={this.handleAddCounter} />
        </p>
      </div>
    );
  }
}

Hi.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hi;
