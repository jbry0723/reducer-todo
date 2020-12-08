
import React, { useState, useEffect } from 'react'
import { initialState } from '../reducer'
import Todo from "./Todo"


const initialTodo=
[{todo:"thing!", completed: false, id:454564}]
const TodoList= props =>{
    const [todosArray, setTodosArray]=useState(initialTodo)
    console.log(todosArray[0])
    return(
        <div>
            {todosArray.map(item=>{
                return(
                    <div>
            <Todo  todo={item.todo} id={item.id} key={item.id} completed={item.completed} />
        
        </div>
                )
            })}
        </div>
    )
}

export default TodoList
