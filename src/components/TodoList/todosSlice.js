import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    },

    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },

    deleteAllTodo: () => {
      return []
    },

    updateTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload?.id) {
          return {
            ...todo,
            name: action.payload?.editName,
            priority: action.payload?.editPriority,
          }
        }
        return todo
      })
    },
  },
})

export const { addTodo, toggleTodoStatus, deleteTodo, deleteAllTodo, updateTodo } =
  todoListSlice.actions

export default todoListSlice.reducer
