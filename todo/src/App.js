import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import reducer, { initialState } from "./reducer/index"
import {useReducer} from "react"


function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} state={state} />
      <TodoList dispatch={dispatch} state={state}/>     
    </div>
  );
}

export default App;
