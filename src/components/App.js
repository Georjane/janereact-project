import '../App.css';
// import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Display results="jane" />
      <ButtonPanel results="jany" />
    </>
  );
}

export default App;
