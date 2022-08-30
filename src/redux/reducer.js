const initState = {
  filters: {
    search: '',
    status: 'All',
    priorities: [],
  },
  todoList: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
  ],
}

// reducer là 1 function
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    case 'todoList/deleteTodo':
      return {
        ...state,
        todoList: [...state.todoList].filter((item) => item.id !== action.payload?.id),
      }
    default:
      return state
  }
}

export default rootReducer