const todoEdit = (state = {id: 0,task: '',date: ''}, action) => {
  switch (action.type){
    case 'SET_TODO':
      return {
        id: action.id,
        task: action.task,
        date: action.date
      }
    default:
      return state
  }
}

export default todoEdit;