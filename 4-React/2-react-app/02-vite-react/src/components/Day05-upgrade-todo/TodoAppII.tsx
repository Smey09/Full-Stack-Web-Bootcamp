import React, { useState, ChangeEvent, FormEvent } from "react";

interface Item {
  id: number;
  name: string;
}

const TodoAppII: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState("");
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [editItemName, setEditItemName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItemName(event.target.value);
  };

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditItemName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newItemName.trim()) {
      const newItem: Item = { id: items.length, name: newItemName };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  const handleEditSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (editingItem && editItemName.trim()) {
      const updatedItems = items.map((item) =>
        item.id === editingItem.id ? { ...item, name: editItemName } : item
      );
      setItems(updatedItems);
      setEditingItem(null);
      setEditItemName("");
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEditing = (item: Item) => {
    setEditingItem(item);
    setEditItemName(item.name);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-blue-400 rounded-lg shadow-md">
      <form onSubmit={editingItem ? handleEditSubmit : handleSubmit}>
        <input
          type="text"
          value={editingItem ? editItemName : newItemName}
          onChange={editingItem ? handleEditChange : handleChange}
          placeholder={editingItem ? "Edit item" : "Enter item"}
        />
        <button type="submit" className="ml-2 bg-blue-700 text-white">
          {editingItem ? "Save Changes" : "Add Item"}
        </button>
      </form>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm"
          >
            ID: {item.id}, Name: {item.name}
            <div className="flex space-x-2">
              <button
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
              <button
                className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                onClick={() => startEditing(item)}
              >
                Change
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAppII;
