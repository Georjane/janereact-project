import React from 'react';
import styled from 'styled-components';

const RedText = styled.h1`
  color: green;
`;

const Home = () => {
  const styles = {
    color: 'blue',
  };
  return (
    <div>
      <RedText>Hey Jane</RedText>
      <h1>Hello from Home!!!</h1>
      {/* inline styling */}
      <p style={{ color: 'red' }}>
        Example Text
      </p>
      {/* object in our code that stores the style properties */}
      <p style={styles}>
        Example Text
      </p>
    </div>
  );
};

export default Home;
