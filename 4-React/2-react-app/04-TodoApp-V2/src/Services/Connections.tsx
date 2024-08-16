import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const getItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/listTodo`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const getItemById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/listTodo/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with id ${id}:`, error);
    throw error;
  }
};

export const createItem = async (item: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/listTodo`, item);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

export const updateItem = async (id: string, item: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/listTodo/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with id ${id}:`, error);
    throw error;
  }
};

export const deleteItem = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/listTodo/${id}`);
  } catch (error) {
    console.error(`Error deleting item with id ${id}:`, error);
    throw error;
  }
};
