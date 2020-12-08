
import React, { useState, useEffect, useReducer } from 'react'
import Todo from "./Todo"
import reducer, { initialState } from "../reducer/index"
import {setNewItem, addTodo} from "../actions/index"



const TodoList= ({dispatch, state}) =>{
    

   console.log("todoliststate",state)
    
    return(
        <div>
            {state.todos.map(item=>{
                return(
                    
                    <div>
            <Todo  state={state} dispatch={dispatch} key={item.id} todo={item} />
        
        </div>
                )
            })}
        </div>
    )
}

export default TodoList
