
let idtime=Date.now()

export const initialState=[
    {
    item: 'Learn about reducers',
    completed: false,
    id:{idtime}
},
["test"]
]





const reducer=(state,action)=>{
    switch (action.type){
        case("INPUT"):
            return (state[0].item=action.payload)
        case("ADD_TODO"):
            return ([...state,action.payload])
        default:
            return (state)
            
    }
}

export default reducer