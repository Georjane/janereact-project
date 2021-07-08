import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const {
    clickHandler,
  } = props;
  return (
    <button type="button" onClick={clickHandler}>
      Add one
    </button>
  );
};

Counter.propTypes = {
  clickHandler: PropTypes.isRequired,
};

export default Counter;
