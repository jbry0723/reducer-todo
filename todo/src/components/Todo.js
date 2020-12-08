import React, {useReducer} from 'react';
import {toggleComplete} from "../actions/index"
import reducer, {initialState} from "../reducer"



const Todo= props =>{
    console.log('props',props)
    const handleClick=()=>{
        console.log(props.todo.id)
        toggleComplete(props.todo.id)
    }
    return(
        <div 
        onClick={handleClick} 
        className={`${props.todo.completed ? 'completed': ''}`}>
            <p>{props.todo.item}</p>
        </div>
    )
}
export default Todo