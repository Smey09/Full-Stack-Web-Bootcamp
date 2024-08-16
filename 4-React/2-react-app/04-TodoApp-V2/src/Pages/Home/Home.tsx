import React from "react";
import AppBar from "../../Components/Home/AppBar/AppBar";
import BodyApp_v2 from "../../Components/Home/BodyApp/BodyApp_v2";
import NevBar_v2 from "../../Components/Home/NevBar_v2";

const HomePage: React.FC = () => {
  return (
    <div>
      <AppBar />
      <BodyApp_v2 />
      <NevBar_v2 />
    </div>
  );
};

export default HomePage;
