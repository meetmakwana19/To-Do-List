import React from 'react'
import { useState } from "react";

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("")          
    const [desc, setDesc] = useState("")          

    // creating a method for the action onSubmit
    const submit = (e)=>{
        // this will prevent the page from reloading
        e.preventDefault();

        // if not of title OR not of desc
        if(!title || !desc){
            alert("It cannot be blank")
        }

        else{
            // this will add the todo to our list
            addTodo(title, desc)
    
            // to make the fields blank after these funs are called
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>                
                <button type="submit" className="btn btn-sm btn-success">Submit</button> <hr/>
            </form>
        </div>
    )
}
