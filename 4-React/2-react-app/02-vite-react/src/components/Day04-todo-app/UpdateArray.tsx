import React, { useState } from "react";

interface Item {
  id: number;
  value: string;
}

const UpdateArray: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, value: "Helllo 123" },
    { id: 2, value: "hello k2w" },
  ]);

  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [newValue, setNewValue] = useState("");

  const startEditing = (id: number, currentValue: string) => {
    setEditingItemId(id);
    setNewValue(currentValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItemId !== null) {
      updateItem(editingItemId, newValue);
      setEditingItemId(null);
      setNewValue("");
    }
  };

  const updateItem = (id: number, newValue: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-yellow-500 rounded-lg shadow-md">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}: {item.value}
            <button
              className="bg-green-200"
              onClick={() => startEditing(item.id, item.value)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {editingItemId !== null && (
        <form onSubmit={handleSubmit}>
          <label>
            New Value:
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          </label>
          <button className="bg-blue-500" type="submit">
            Update
          </button>
          <button
            className="bg-white"
            type="button"
            onClick={() => setEditingItemId(null)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateArray;
