import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
  const { results } = props;
  return (
    <h1>
      Hello,
      {results}
      ButtonPanel
    </h1>
  );
};

ButtonPanel.propTypes = {
  results: PropTypes.string.isRequired,
};

export default ButtonPanel;
