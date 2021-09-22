// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="item">
      <h1 className="title">{title}</h1>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
