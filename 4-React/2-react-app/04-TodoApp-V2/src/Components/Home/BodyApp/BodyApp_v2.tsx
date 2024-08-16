import React from "react";
import Display_Form from "./Display_Form";
import CardTodo from "./CardTodo";

const BodyApp_v2: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <Display_Form />
        <CardTodo />
      </div>
    </div>
  );
};

export default BodyApp_v2;
