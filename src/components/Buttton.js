import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;
  return (
    <h1>
      Hello,
      {buttonName}
      Button
    </h1>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};


export default Button;
