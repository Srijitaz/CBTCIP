// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todoState, settodoState] = useState([])
  let save =(event)=>{

    let todoname = event.target.todoname.value;
    if(!todoState.includes(todoname)){
      let finTOdo =[...todoState,todoname]
      settodoState(finTOdo)
    }
    else{
      alert("ToDo Name already exists....")
    }
    event.preventDefault();
  }
   let list = todoState.map((value, index)=>{

    
    return(
      <ListItems value ={value} key={index} indexNo ={index}
      todoState ={todoState} settodoState={settodoState}/>
    )
   })
  

  let toDolist = ListItems
  return (
    <div className="App">
     <h1>TO-DO LIST</h1>
     <form onSubmit={save}>
      <input type='text'name='todoname'/><button>SAVE</button>
     </form>

    <div className='outToDoList'>
     <ul>
      {list}
     </ul>
    </div>
     
    </div>
  );
}

export default App;

function ListItems({value,indexNo, todoState, settodoState}){
  let [status, setstatus]= useState(false)
  let deleteRow =()=>{
    let finalList = todoState.filter((v,i)=>i!==indexNo)
    settodoState(finalList)
  }

  let checkStat =()=>{
    setstatus(!status)
  }
  return(
    <li className={(status)? 'completeList' :''}onClick={checkStat}>{indexNo+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
  
};
