import React, { useState } from "react";
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoKeyDown = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const trimmedText = newTodo.trim();
    if (trimmedText) {
      setTodos([...todos, { text: trimmedText, completed: false }]);
      setNewTodo("");
    }
  };

  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleClick = () => {
    const trimmedText = newTodo.trim();
    if (trimmedText) {
      setTodos([...todos, { text: trimmedText, completed: false }]);
      setNewTodo("");
    }
  };

  const handledelete = (id) => {
   const todolist = [...todos]
  const a = todolist.filter((_,index) => index!==id)

   setTodos(a)
  }

  const incompleteCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <div>
        <h1 className="heading">Todo APP </h1>
      </div>

      <div style={{ textAlign: "center" }}>
        {incompleteCount} item(s) left in your TodoList
      </div>
      <div className="listBox">
        <div className="list">
        <input
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={handleNewTodoChange}
          onKeyDown={handleNewTodoKeyDown}
        />
        <button className="btn" onClick={() => handleClick()}>Enter</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => handledelete(index)}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoToggle(index)}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
