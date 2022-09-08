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

export const deleteAllTodo = () => {
  return {
    type: 'todoList/deleteAllTodo',
  }
}

export const updateTodo = (data = {}) => {
  return {
    type: 'todoList/updateTodo',
    payload: data,
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  }
}

export const searchFilterChange = (text = '') => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  }
}

export const statusFilterChange = (status = '') => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  }
}

export const priorityFilterChange = (priorities = []) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
  }
}
