import React from 'react';

const Home = () => {
  const styles = {
    color: 'blue',
  };
  return (
    <div>
      <h1>Hello from Home!!!</h1>
      {/* inline styling */}
      <p style={{ color: 'red' }}>
        Example Text
      </p>
      <p style={styles}>
        Example Text
      </p>
    </div>
  );
};

export default Home;
