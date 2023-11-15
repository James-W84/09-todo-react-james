import "./NewTodo.css";

function NewTodo() {
  return (
    <form>
      <input type="text" id="add_item"></input>
      <button type="submit" id="add_item_btn">
        Add
      </button>
    </form>
  );
}

export default NewTodo;
