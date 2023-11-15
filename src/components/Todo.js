import "./Todo.css";

function Todo() {
  return (
    <div className="todo_item">
      <div>Todo item</div>
      <button type="submit" name="check" className="check">
        ✔
      </button>
      <button type="submit" name="remove" className="remove">
        🗑
      </button>
    </div>
  );
}

export default Todo;
