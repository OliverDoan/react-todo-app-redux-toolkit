// action là 1 object
// action creators: là 1 function để trả về 1 action
export const addTodo = (data = {}) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}
export const deleteTodo = (id = '') => {
  return {
    type: 'todoList/deleteTodo',
    payload: id,
  }
}
