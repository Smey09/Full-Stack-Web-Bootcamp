import React, { useEffect, useState } from "react";
import { getItems } from "../../../Services/Connections";
import TodoItem from "./TodoItems";
// Define the type for your item data
interface TodoItemData {
  id: string;
  title: string;
  descriptions: string;
  status: string;
  level: string;
}

const CardTodo: React.FC = () => {
  const [items, setItems] = useState<TodoItemData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        setError("Failed to fetch items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-blue-200 w-full md:w-1/2 h-[700px] mr-0 md:mr-6 mt-3 rounded overflow-y-auto">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          descriptions={item.descriptions} // Ensure this is correctly assigned
          status={item.status}
          level={item.level}
        />
      ))}
    </div>
  );
};

export default CardTodo;
