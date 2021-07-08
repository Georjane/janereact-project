import React from 'react';
import PropTypes from 'prop-types';

function Hello(props) {
  const { name } = props;
  return (
    <h1>
      Hello
      {' '}
      {name}
    </h1>
  );
}
// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//     const { name } = this.props;
//     this.state = {
//       fname: name,
//     };
//   }

//   render() {
//     const {
//       fname,
//     } = this.state;
//     return (
//       <h1>
//         Hello
//         {' '}
//         {fname}
//         !
//       </h1>
//     );
//   }
// }

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
