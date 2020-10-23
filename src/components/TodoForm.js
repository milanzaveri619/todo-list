import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo,editTodo,setTodo} from '../actions';

const TodoForm = () => {
  const [id, setId] = useState(0);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const selected = useSelector(state => state.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    setId(selected.id);
    setTask(selected.task);
    setDate(selected.date);
  }, [selected]);

  function todoSubmit(e){
    e.preventDefault();
    var regex_task = new RegExp(/^[a-zA-Z ]*$/);
    var regex_date = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/); 
    if(task !== "" && date !== ""){
      if(regex_task.test(task)){
        if(regex_date.test(date)){
          if(id === 0){
            //Add todo
            dispatch(addTodo(task,date));
            setTask("");
            setDate("");
          }
          else{
            //Edit Todo
            dispatch(editTodo(id,task,date));
            dispatch(setTodo(0,"",""));
          }
        }
        else{
          alert('Invalid date format. Only dd/mm/yyyy allowed.');
        }
      }
      else{
        alert('Invalid task name. Only alphabets allowed.');
      }
    }
    else{
      alert("Please fill both fields.");
    }
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={e=>todoSubmit(e)}>
        <div className="card card-todo">
          <h5 className="card-header todo-card-title">Add/Edit Todos</h5>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="txtTask" className="lbl-todo-form">Task Name</label>
              <input type="text" id="txtTask" className="form-control txt-todo-form" value={task} onChange={e=>setTask(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="txtDate" className="lbl-todo-form">Date</label>
              <input type="text" id="txtDate" className="form-control txt-todo-form" placeholder="dd/mm/yyyy" value={date} onChange={e=>setDate(e.target.value)}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
export default TodoForm;
