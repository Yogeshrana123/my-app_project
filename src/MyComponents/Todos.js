import React from 'react';

import TodoItem from './TodoItem';

  export default function Todos(props) {
    let TodoContainerStyle = {
        minHeight: "500px",
    }
   return (
       <div className="container mb-5" style={TodoContainerStyle}>
         <h3 className="text-center my-3"> Todos List</h3>
         {props.todos.length === 0?"No Todos to desplay":props.todos.map((todo)=>{
             return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           })
          }
       </div>
    );
}
