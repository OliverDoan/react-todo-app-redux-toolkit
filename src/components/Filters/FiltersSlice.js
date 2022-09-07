const initState = {
  search: '',
  status: 'All',
  priorities: [],
}

const filterListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'filters/searchFilterChange':
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}

export default filterListReducer
