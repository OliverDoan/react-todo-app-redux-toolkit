import { configureStore } from '@reduxjs/toolkit'
import filterListSlice from '../components/Filters/filtersSlice'
import todoListSlice from '../components/TodoList/todosSlice'
const store = configureStore({
  reducer: {
    filters: filterListSlice,
    todoList: todoListSlice,
  },
})

export default store
