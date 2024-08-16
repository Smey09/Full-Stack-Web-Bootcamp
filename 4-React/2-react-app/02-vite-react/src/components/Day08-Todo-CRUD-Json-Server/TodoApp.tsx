import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const API_URL = "http://localhost:9000/items"; // Replace with your JSON server URL

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editInput, setEditInput] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(API_URL);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (input.trim() === "") {
      console.log("Input is empty. No todo item added.");
      return;
    }

    console.log("Adding ->", input);

    try {
      const newTodo: Omit<Todo, "id"> = { text: input, completed: false };
      console.log("New todo data:", newTodo);

      const response = await axios.post<Todo>(API_URL, newTodo);

      const result = response.data;
      console.log(result);

      setTodos([...todos, result]);
      setInput("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id: number) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    if (!updatedTodo) return;

    try {
      const response = await axios.patch<Todo>(`${API_URL}/${id}`, {
        completed: !updatedTodo.completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const startEditing = (todo: Todo) => {
    setIsEditing(todo.id);
    setEditInput(todo.text);
  };

  const saveEdit = async () => {
    if (editInput.trim() === "") return;
    if (isEditing === null) return;

    try {
      const response = await axios.patch<Todo>(`${API_URL}/${isEditing}`, {
        text: editInput,
      });
      setTodos(
        todos.map((todo) => (todo.id === isEditing ? response.data : todo))
      );
      setIsEditing(null);
      setEditInput("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditInput("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-300 rounded-lg shadow-md hover:bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-l-md "
          placeholder="Add a new todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5 bg-white border-2 border-black rounded-md">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2">
            <label className="flex items-center space-x-2">
              {isEditing !== todo.id && (
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              )}
              {isEditing === todo.id ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={editInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit();
                      }
                    }}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="border border-gray-300 p-2 rounded-l-md"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white p-2 rounded-r-md hover:bg-yellow-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <span
                  className={`flex-1 cursor-pointer ${
                    todo.completed
                      ? "line-through text-blue-500 "
                      : "text-red-500"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </label>
            <div className="space-x-2">
              {isEditing === todo.id ? (
                <></>
              ) : (
                <>
                  <button
                    onClick={() => startEditing(todo)}
                    className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
