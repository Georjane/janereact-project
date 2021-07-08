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
  results: PropTypes.string.isRequired,
};

export default Display;
