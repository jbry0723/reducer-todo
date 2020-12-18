import React, {useReducer} from 'react';
import {toggleComplete} from "../actions/index"
import reducer, {initialState} from "../reducer"



const Todo= (props) =>{
    console.log('props',props)
    const handleClick=()=>{
        
        props.dispatch(toggleComplete(props.todo.id, props.state.todos))
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