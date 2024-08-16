import React, { useState, ChangeEvent, FormEvent } from "react";

interface Item {
  id: number;
  name: string;
}

const AddRemove: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newItemName.trim()) {
      const newItem: Item = { id: items.length, name: newItemName };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-green-400 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItemName}
          onChange={handleChange}
          placeholder="Enter item"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white ">
          Add Item
        </button>
      </form>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}{" "}
            <button
              className="bg-red-600 text-white"
              onClick={() => removeItem(item.id)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddRemove;


