import logo from './logo.svg';
import './App.css';

function App() {


  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];


  return (
    <div className="App">
      <h1>Todos List</h1>
      <TodoList todos={todos} />

     
    </div>
  );
}


function TodoList(props) {
  return(
    <ul>{props.todos.map(todo=>(
      <li>{todo.text}</li>
    ))}</ul>

  )
}

export default App;
