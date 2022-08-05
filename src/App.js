
import './App.css';
import  Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import  Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i am delete of",todo);
    setTodosArr(TodosArr.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getIetm("TodosArr");
  }
  const addTodos=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(TodosArr.length==0){
      sno=0;
    }else{
      sno =TodosArr[TodosArr.length-1].sno +1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,

    }
    setTodosArr([...TodosArr,myTodo]);
    console.log(myTodo);
    if(localStorage.getIetm("TodosArr")){
      localStorage.setIetm("TodosArr",TodosArr);

    }

  }

  const [TodosArr,setTodosArr] = useState([]);
  return (
        <>
          <Header title="My Todo List" serachBar={true}/>
          <AddTodo addTodos={addTodos}/>
          <Todos todos={TodosArr} onDelete={onDelete}/>
          <Footer/>
        </>
  );
}

export default App;
