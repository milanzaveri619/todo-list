let nextTodoId = 1
export const addTodo = (task,date) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  task,
  date
})

export const editTodo = (id,task,date) => ({
  type: 'EDIT_TODO',
  id,
  task,
  date
})

export const setTodo = (id,task,date) => ({
  type: 'SET_TODO',
  id,
  task,
  date
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}