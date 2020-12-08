

let idtime=Date.now()

export const initialState=
{
    
    todos:[
        
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
          item:'test',
          completed:false,
          id:867304583
      }

    ]
    }







const reducer=(state,action)=>{
    switch (action.type){
        case("INPUT"):
            return ({...state,input:action.payload})
        case("ADD_TODO"):
            return ({...state, todos:[...state.todos, {item:action.payload,completed:false ,id:Date.now()  }]})

        case("TOGGLE_TODO"):
            const toggleState=state.todos.map (obj=>{
                if (obj.id===action.payload){
                    
                    return (console.log("found!"),{...obj, completed:true
                    })
                }else{
                    
                    return(console.log("not found"),obj)
                    
                }
            })
            return (console.log("toggletodolog"),{...state, todos: [toggleState]})        
            
        default:
            return (console.log("default"),state)
            
    }
}

export default reducer