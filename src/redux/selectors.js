import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search
export const todoListSelector = (state) => state.todoList
export const filterStatusSelector = (state) => state.filters.status
export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return todo.name.includes(searchText)
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed)
      )
    })
  }
)
