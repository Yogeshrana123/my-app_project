

import Todos from './Todos';
import AddTodo from './AddTodo';
import { useState , useEffect } from 'react';

function Home() {
  let initTodo;
  if(localStorage.getItem("TodosArr")===null){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("TodosArr"));
  }

  const onDelete=(todo)=>{
    console.log("i am delete of",todo);
    setTodosArr(TodosArr.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("TodosArr",JSON.stringify(TodosArr));
  }
  const addTodos=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(TodosArr.length===0){
      sno=0;
    }else{
      sno =TodosArr[TodosArr.length-1].sno +1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,

    }
     const newTodos = [...TodosArr, myTodo ];
    setTodosArr(newTodos);
}

  const [TodosArr,setTodosArr] = useState(initTodo);
      useEffect(()=>{
        localStorage.setItem("TodosArr",JSON.stringify(TodosArr));

    },[TodosArr]);
  return (
        <>
       
                 <AddTodo addTodos={addTodos}/>
                 <Todos todos={TodosArr} onDelete={onDelete}/>
     
        </>
  );
}

export default Home;
