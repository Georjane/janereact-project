import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import PropTypes from 'prop-types';

function Welcome() {
  const { name } = props.name;
  return (
    <h1>
      Hello,
      {' '}
      {name}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
