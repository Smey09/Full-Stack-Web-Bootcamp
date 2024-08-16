import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

// Define the type for the props
interface TodoItemProps {
  title: string;
  descriptions: string;
  status: string;
  level: string;
}

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  descriptions,
  status,
  level,
}) => {
  // Define color based on status
  const statusColor = (() => {
    switch (status) {
      case "red":
        return "bg-red-500";
      case "blue":
        return "bg-blue-500";
      case "yellow":
        return "bg-yellow-500";
      case "orange":
        return "bg-orange-500";
      default:
        return "bg-green-600"; // Default color
    }
  })();
  return (
    <div className="bg-neutral-200 text-blue-600 flex flex-col md:flex-row justify-between m-3 items-start md:items-center rounded">
      <div className="m-3 flex-1">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="text-base text-blue-500 md:text-lg">{descriptions}</p>
        <div className="flex gap-x-4 text-[14px] font-bold items-center">
          <span className="text-blue-600">Status:</span>
          <p className={`h-4 w-4 ${statusColor} rounded-full border-[1px]`} />
          <span>|</span>
          <span>Level:</span>
          <p className="flex h-6 w-auto px-2 bg-indigo-400 rounded justify-center items-center text-white">
            {level}
          </p>
        </div>
      </div>
      <div className="m-3">
        <button className="bg-red-200 p-1 md:px-2 md:py-1 rounded hover:bg-yellow-400">
          <RiDeleteBack2Fill className="text-lg md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
