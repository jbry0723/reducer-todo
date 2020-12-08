import React, {useState,useReducer,useEffect} from "react";
import reducer, { initialState } from "../reducer/index"
import {setNewItem, addTodo} from "../actions/index"

console.log(initialState)
let currentState= reducer(initialState, {type:"ADD_TODO",payload:'THING!'})
console.log (currentState)



const TodoForm= ({dispatch, state}) =>{
    const [input, setInput]= useState("")

    
    

    const handleAdd=e=>{
        e.preventDefault();
        dispatch(addTodo(input))
    }

    const handleChanges = e => {
        setInput(e.target.value)
      };

      
    console.log("state",state)

    
    return(
        <div>
            <form>
                <input value={input} onChange={handleChanges} type="text" name="todo" />
                <button onClick={handleAdd}>Add Todo</button>
            </form>
                <button  className="clearbtn">Clear Completed</button>
            
        </div>
    
            )


}

export default TodoForm