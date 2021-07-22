import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={input}
        />
        <button type="button" className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
