import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const defaultTodos: Todo[] = [
  { id: 1, text: "Buy Coffee", completed: false },
  { id: 2, text: "Home work", completed: false },
  { id: 3, text: "Learn HTML", completed: true },
];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-l-md"
          placeholder="Add a new todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded-r-md"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span
                className={`flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : "text-red-500"
                }`}
              >
                {todo.text}
              </span>
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
