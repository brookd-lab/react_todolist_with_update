import "./App.css";
import { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";

function App() {
  const [todos, setTodos] = useState([
    { name: "dog" },
    { name: "cat" },
    { name: "fish" },
  ]);

  var list = JSON.parse(window.localStorage.getItem("todos"));

  if (!list || list.length === 0) {
     window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todo, setTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let todosFromLocalStorage = JSON.parse(
      window.localStorage.getItem("todos")
    );

    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    }
  }, []);

  const todoList = todos.map((item, i) => (
    <div key={i}>
      <div className="todos">
        <span className="item">{item.name}</span>
        <button onClick={() => remove(i)}>Remove</button>
        <button onClick={() => editHandler(i)}>Edit</button>
      </div>
    </div>
  ));

  function add() {
    setTodos((prevTodos) => {
      let updatedTodos = [...todos, todo];
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      return updatedTodos;
    });

    setTodo({});
  }

  function remove(i) {
    var filteredList = todos.filter((todo, index) => index !== i);
    setTodos(filteredList);
    window.localStorage.setItem("todos", JSON.stringify(filteredList));
  }

  function editHandler(i) {
    var todo = todos[i];
    setTodo(todo);
    setIsEditing(true);
    setCurrentIndex(i);
  }

  function update() {
    var updatedList = todos.map((item, i) => {
      if (i === currentIndex) {
        item = { name: todo.name };
      }
      return item;
    });
    setTodos(updatedList);
    setIsEditing(false);
    setTodo({});
  }

  return (
    <div className="App">
      <h2>ToDo List</h2>

      {!isEditing && <AddForm todo={todo} setTodo={setTodo} add={add} />}

      <br />
      {todoList}

      {isEditing && <EditForm todo={todo} setTodo={setTodo} update={update} />}
    </div>
  );
}

export default App;
