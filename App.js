import React,{useState} from 'react'
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    var a="*Enter To-do's";
    if(task !== ""){
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
    a="";
    document.getElementById("form").innerHTML=a;
    }
    else{
      document.getElementById("form").innerHTML=a;
    }
    a="";
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Todo List</h2>
            <form onSubmit={submitHandler} >
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
              <div id="form" className="red"></div>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App