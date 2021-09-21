// rafc and hit enter

import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let myStyle = {
        minHeigth: "50vh",
        margin: "20px auto"
    }
    return (
        <div className="container"  style={myStyle}>
            {/* things inside classNmae are bootstrap classes */}
            <h3 className="my-3">Todos-List</h3> 

            {/* if length===0: print("no todos") elif props.todos.map */}
            {props.todos.length===0? "No Todos to display":
            props.todos.map((todo)=>{
                return(
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                )
            })}
            {/* <TodoItem todos={props.todos[0]}/> */}
        </div>
    )
}
