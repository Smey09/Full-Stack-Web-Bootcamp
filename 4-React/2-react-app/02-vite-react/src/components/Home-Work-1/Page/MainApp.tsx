import React from "react";
import AppBar from "../Screen/AppBar/AppBar";
import NevBar from "../Screen/NevBar/NevBar";
import BodyApp from "../Screen/Body/BodyApp";

const MainApp: React.FC = () => {
  return (
    <div className="p-1">
      <div>
        <AppBar />
      </div>
      <div>
        <BodyApp />
      </div>
      <div>
        <NevBar />
      </div>
    </div>
  );
};

export default MainApp;
