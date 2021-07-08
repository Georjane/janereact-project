// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Hello from './Hello';
import Hi from './Hi';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <h1>
//         {' '}
//         Hello
//         {' '}
//         <Hello name="Leon-Patrick" />
//       </h1>
//     );
//   }
// }

const App = () => (
  <div className="App">
    <Hello name="Leon-Patrick" />
    <Hi name="Jane" />
  </div>
);

export default App;
