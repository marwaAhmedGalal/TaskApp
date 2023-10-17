import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask} from '../redux/slice/taskSlice'
import Task from './task';
import { useState } from 'react';
import { FormControl } from "@mui/material";
import './taskListStyle.css'

const AddTask = () => {
    const count = useSelector((state) => state.task.count);
    const tasks = useSelector((state) => state.task.tasks);

    const [value, setValue] = useState("");

    const dispatch = useDispatch();


    const handleAddTask = (e) => {
        e.preventDefault();
        dispatch(addTask(value));
       
    };
    const handleTaskDone = (id) => {
        dispatch(removeTask(id))
         setValue("");
    };

    return (
      <>
        <div className="containerAddAndInput">
          
        <form onSubmit={handleAddTask}>
        <div className="d-flex flex-column flex-sm-row gap-sm-3 gap-2 mt-1">
         <input className="input" type="text" onInput={(e) => setValue(e.target.value)} />
         <button type="submit" class="btn btn-primary mb-2" disabled={!value}>+</button>
         </div>
       </form>
       <div className="Todos">
         {count > 0 &&
           tasks.map((task) => (
             <Task
               key={task.id}
               text={task.value}
               id={task.id}
               onCheck={handleTaskDone}
             />
           ))}
         {count === 0 && <p>No task</p>}
       </div>
        </div>
      </>
    );
  };
  
  export default AddTask;