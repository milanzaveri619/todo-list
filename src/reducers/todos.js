const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          date: action.date,
          completed: false
        }
      ]
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task, date: action.date } : todo
      )
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    default:
      return state
  }
}

export default todos