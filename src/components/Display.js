import PropTypes from 'prop-types';

const Display = (props) => {
  const { results, next } = props;
  return (
    <h1>
      { next || results || '0' }
    </h1>
  );
};

Display.propTypes = {
  results: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  results: '0',
  next: null,
};

export default Display;
