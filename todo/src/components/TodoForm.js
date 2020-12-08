import React, {useState,useReducer,useEffect} from "react";
import reducer, { initialState } from "../reducer/index"
import {setNewItem, addTodo, removeCompleted} from "../actions/index"





const TodoForm= ({dispatch, state}) =>{
    const [input, setInput]= useState("")

    
    

    const handleAdd=e=>{
        e.preventDefault();
        dispatch(addTodo(input))
    }

    const handleChanges = e => {
        setInput(e.target.value)
      };

    const handleClear=e=>{
        e.preventDefault();
        dispatch(removeCompleted(state.todos))}

      
    console.log("state",state)

    
    return(
        <div>
            <form>
                <input value={input} onChange={handleChanges} type="text" name="todo" />
                <button onClick={handleAdd}>Add Todo</button>
            </form>
                <button onClick={handleClear}  className="clearbtn">Clear Completed</button>
            
        </div>
    
            )


}

export default TodoForm