import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  return (
    <div className="App" id="content">
      <NewTodo></NewTodo>
      <Todo></Todo>
      <Todo></Todo>
    </div>
  );
}

export default App;
