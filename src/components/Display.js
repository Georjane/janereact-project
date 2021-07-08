import PropTypes from 'prop-types';

const Display = (props) => {
  const { results } = props;
  return (
    <h1>
      Hello,
      {results}
      Display
    </h1>
  );
};

Display.propTypes = {
  results: PropTypes.string,
};

Display.defaultProps = {
  results: '0',
};

export default Display;
