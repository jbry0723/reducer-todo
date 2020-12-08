
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_COMPLETED="REMOVE_COMPLETED";

export const addTodo = (todo) => {
    return { type: ADD_TODO, payload: todo };
  };

export const toggleComplete = (todoId, todoArray) => {
  const toggleState = todoArray.map((obj) => {
    if (obj.id === todoId) {
      return { ...obj, completed: !obj.completed };
    } else {
      return obj;
    }
  });
  console.log("mapping!");
  console.log(toggleState)
  return { type: "TOGGLE_TODO", payload: toggleState };
};

export const removeCompleted=(todoArray)=>{
    const removedArray=todoArray.filter((obj)=>{
        return(obj.completed===false)
        
        })
    
            
        
   

    return {type: "REMOVE_COMPLETED", payload:removedArray}

}


