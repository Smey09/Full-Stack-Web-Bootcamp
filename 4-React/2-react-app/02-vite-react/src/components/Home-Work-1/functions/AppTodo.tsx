// TodoApp.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTodoApp from "../Components/CardTodoApp";
import { useTodoContext } from "./TodoContext";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const API_URL = "http://localhost:9000/items"; // Replace with your JSON server URL

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { setTotal, setCompleted } = useTodoContext();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>(API_URL);
        setTodos(response.data);
        setTotal(response.data.length);
        setCompleted(response.data.filter((todo) => todo.completed).length);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [setTotal, setCompleted]);

  const toggleTodo = async (id: number) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    if (!updatedTodo) return;

    try {
      const response = await axios.patch<Todo>(`${API_URL}/${id}`, {
        completed: !updatedTodo.completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
      setCompleted(todos.filter((todo) => todo.completed).length);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <CardTodoApp todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default TodoApp;
