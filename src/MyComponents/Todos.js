import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3" style={{ color: 'blue' }}><u>To Do List</u></h3>
            <br />
            {props.todos.length === 0 ? "Nothing to display. Try adding one!" :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}
