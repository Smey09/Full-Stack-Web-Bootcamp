import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const CardTodoApp: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="list-disc pl-5 bg-white border-2 border-black rounded-md w-56">
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
                todo.completed ? "line-through text-blue-500" : "text-red-500"
              }`}
            >
              {todo.text}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CardTodoApp;
