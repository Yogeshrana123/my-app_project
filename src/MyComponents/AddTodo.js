import React from 'react';
import { useState } from 'react';
 export default function AddTodo(props){
 	const [title, setTitle] = useState("");
 	const [desc, setDesc] = useState("");
 	const submit = (e)=>{
 		e.preventDefault();
 		if(!title || !desc){
 			alert("Title or Description cannot be blank")
 		}else{
	 		props.addTodos(title,desc);
	 		setTitle("");
	 		setDesc("");
	 	}

 	}
	return (
		<div className="container">
		<h3>Add a Todo</h3>
			<form onSubmit={submit}>
			  <div className="mb-3">
			    <label htmlFor="title"className="form-label">Todo Title</label>
			    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title"/>
			  </div>
			  <div className="mb-3">
			    <label htmlFor="desc" className="form-label"> Todo Description</label>
			    <input type="text"className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
			  </div>
			  	<button type="submit"className="btn btn-sm btn-primary">Add Todo</button>
			</form>
		</div>
	);



}
