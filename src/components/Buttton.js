import PropTypes from 'prop-types';

function Button({ buttonName, clickHandler }) {
  return <button type="button" onClick={clickHandler}>{ buttonName }</button>;
}

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  clickHandler: () => '',
};

export default Button;
