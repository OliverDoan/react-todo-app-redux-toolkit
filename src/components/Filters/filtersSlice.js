import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  },
})

export const { searchFilterChange, statusFilterChange, priorityFilterChange } = filtersSlice.actions

export default filtersSlice.reducer
