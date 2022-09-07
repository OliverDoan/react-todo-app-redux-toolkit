const initState = [
  { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
  { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
  { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
]

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]

    case 'todoList/deleteTodo':
      return [...state].filter((todo) => todo.id !== action.payload?.id)

    case 'todoList/updateTodo':
      return [...state].map((todo) => {
        if (todo.id === action.payload?.id) {
          return {
            ...todo,
            name: action.payload?.editName,
            priority: action.payload?.editPriority,
          }
        }
        return todo
      })

    default:
      return state
  }
}

export default todoListReducer
