import React, { useState } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        Hooks count is
        {' '}
        {count}
      </h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>Add count</button>
    </div>
  );
};

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
