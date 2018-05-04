const Project = ({ project }) => (
  <div>
    <h2>{ project.name }</h2>
    <p>
      Todos:
      {
        project.todos.map(todoId => (
          <Todo id={todoId}/>
        )
      }
    </p>
  </div>
)
