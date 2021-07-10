import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === 'black') {
        setColor('red');
      } else {
        setColor('black');
      }
    };

    document.addEventListener('click', changeColorOnClick);

    return () => {
      document.removeEventListener('click', changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

// import React, { useState } from 'react';

// const Hooks = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>
//         Hooks count is
//         {' '}
//         {count}
//       </h1>
//       <button type="button" onClick={() => { setCount(count + 1); }}>Add count</button>
//     </div>
//   );
// };

// class Hooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     // this.handleCLick = this.handleCLick.bind(this);
//   }

//   // handleCLick = () => {
//   //   const { count } = this.state;
//   //   this.setState({ count: count + 1 });
//   // }

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>
//           Hooks count is
//           {' '}
//           {count}
//         </h1>
// <button type="button"
// onClick={() => { this.setState({ count: count + 1 }); }}>Add count</button>
//       </div>
//     );
//   }
// }

export default Hooks;
