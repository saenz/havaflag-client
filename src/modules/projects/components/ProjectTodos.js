import { createSelector } from 'reselect';
import todos from '../todos';

// Same as before
const ProjectTodos = ({ todos }) => (
  <div>
    {todos.map(t => <TodoItem todo={t}/>)}
  </div>
);

const ProjectTodosContainer = connect(
  createSelector(
    (state, props) => state.projects[props.projectID],

    // Let the todos module provide the implementation of the selector.
    // GOOD!
    todos.selectors.getAll,

    // Combine previous selectors, and provides final props.
    (project, todos) => {
      return {
        todos: todos.filter(t => project.todoIDs.includes(t.id))
      };
    }
  )
)(ProjectTodos);