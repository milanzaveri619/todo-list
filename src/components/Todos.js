import React from 'react';
import TodoItem from './TodoItem';
import {useSelector,useDispatch} from 'react-redux';
import {setVisibilityFilter} from '../actions';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div className="card card-todo">
          <h5 className="card-header todo-card-title">List Of Todos</h5>
          <div className="card-body no-padd">
            <div className="todo-filter">
              <label>Filter</label>
              <select className="form-control" onChange={e=>dispatch(setVisibilityFilter(e.target.value))}>
                <option value="SHOW_ALL" defaultValue>All</option>
                <option value="SHOW_ACTIVE">Active</option>
                <option value="SHOW_COMPLETED">Complete</option>
              </select>
            </div>
            <div className="todos-wrap">
              {
                todos.map(function(object,i){
                  switch (filter){
                    case 'SHOW_ALL':
                      return <TodoItem obj={object} key={i} />
                    case 'SHOW_ACTIVE':
                      return object.completed === false ? <TodoItem obj={object} key={i} /> : '';
                    case 'SHOW_COMPLETED':
                      return object.completed === true ? <TodoItem obj={object} key={i} /> : '';
                    default:
                      return <TodoItem obj={object} key={i}/>
                  }
                  
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todos;
