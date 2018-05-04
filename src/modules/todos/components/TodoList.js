import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <div>
    todos.map(t => <TodoItem todo={t}/>)
  </div>
);

export default connect(
  createStructuredSelector({
    todos: getAll
  })
)(TodoList);
