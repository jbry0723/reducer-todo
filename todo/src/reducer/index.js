export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      item: "test",
      completed: false,
      id: 867304583,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("add todo");
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() },
        ],
      };

    case "TOGGLE_TODO":
      return { ...state, todos: action.payload };

    case "REMOVE_COMPLETED":
      return { ...state, todos: action.payload }


    default:
      console.log("default case occuring");
      return state;
  }

    

};

export default reducer;
