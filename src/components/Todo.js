import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /** dispatches action to toggle todo */}
  >
    {todo && todo.completed ? '👌' : '👋'}
    {' '}
    <span
      className={cx(
        'todo-item__text',
        todo && todo.completed && 'todo-item__text--completed',
      )}
    >
      {todo.content}
    </span>
  </li>
);
Todo.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default Todo;
