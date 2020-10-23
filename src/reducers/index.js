import todos from './todos';
import todosFilter from './todosFilter';
import todoEdit from './todoEdit';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  todos,
  filter: todosFilter,
  selected: todoEdit
});

export default allReducers;