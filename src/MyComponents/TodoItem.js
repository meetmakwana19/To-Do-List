// rafc and hit enter
import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger py-1" onClick={()=>{onDelete(todo)}}>Delete</button>
            <hr/>
            
        </div>
    )
}
