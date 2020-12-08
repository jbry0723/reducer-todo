export const INPUT="INPUT"
export const ADD_TODO="ADD_TODO"
export const TOGGLE_TODO="TOGGLE_TODO"


export const setNewItem=(todo)=>{
    return ({type:INPUT, payload:todo})
}

export const addTodo=(todo)=>{
    return({type:ADD_TODO, payload:todo})
}

export const toggleComplete=(todo)=>{
    return( console.log("triggered"),{type:TOGGLE_TODO, payload:todo})
}