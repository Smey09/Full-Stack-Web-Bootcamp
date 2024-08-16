// TodoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TodoContextType {
  total: number;
  completed: number;
  setTotal: (total: number) => void;
  setCompleted: (completed: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);

  return (
    <TodoContext.Provider value={{ total, completed, setTotal, setCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
