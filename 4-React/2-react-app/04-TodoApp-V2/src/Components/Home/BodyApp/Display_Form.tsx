import React, { useState } from "react";
import { createItem } from "../../../Services/Connections";
const Display_Form: React.FC = () => {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [status, setStatus] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = { title, descriptions, status, level };

    try {
      const createdItem = await createItem(newItem);
      console.log("Item created successfully:", createdItem);
      setTitle("");
      setDescriptions("");
      setStatus("");
      setLevel("");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div className="bg-red-200 h-[700px] w-full sm:w-[50%] lg:w-[40%] mx-auto mt-3 rounded p-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">Add Todo</h1>
      </div>
      <div className="mt-6 space-y-2">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-5 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="descriptions"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Descriptions
              </label>
              <input
                type="text"
                id="descriptions"
                value={descriptions}
                onChange={(e) => setDescriptions(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter descriptions"
                required
              />
            </div>
            <div>
              <label
                htmlFor="status_card"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Status
              </label>
              <select
                id="status_card"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="bg-red-600">Red</option>
                <option value="bg-blue-600">Blue</option>
                <option value="bg-green-600">Green</option>
                <option value="bg-yellow-600">Yellow</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="level_card"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Level
              </label>
              <select
                id="level_card"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select level
                </option>
                <option value="low">Low</option>
                <option value="hight">Hight</option>
                <option value="medium">Medium</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Display_Form;
