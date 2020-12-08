import React, {useState,useReducer} from "react";
import reducer, { initialState } from "../reducer/index"
import {setNewItem} from "../actions/index"

console.log(initialState)
let currentState= reducer(initialState, {type:"ADD_TODO",payload:'THING!'})
console.log (currentState)



const TodoForm= props =>{
    const [state,dispatch]=useReducer(reducer,initialState)

    const handleChanges = e => {
        dispatch(setNewItem(e.target.value))
      };
    console.log("currentState",state)
    return(
        <div>
            <form>
                <input value={state.item} onChange={handleChanges} type="text" name="todo" />
                <button>Add Todo</button>
            </form>
                <button onClick={props.clearCompleted} className="clearbtn">Clear Completed</button>
            
        </div>
    
            )


}

export default TodoForm