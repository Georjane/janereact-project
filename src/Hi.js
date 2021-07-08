import React from 'react';
import PropTypes from 'prop-types';

class Hi extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      fname: name,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const {
      fname, value,
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
        <input type="text" value={value} onChange={this.handleChange} />
        <h2>
          You are typing
          {' '}
          {value}
        </h2>
      </div>
    );
  }
}

Hi.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hi;
