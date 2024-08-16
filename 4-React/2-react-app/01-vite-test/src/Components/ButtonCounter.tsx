import React, { useState } from "react";
import { Row } from "react-bootstrap";

import "./style.css";

const ButtonCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="body_Card">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 10px" }}>
          <button
            className="button_red"
            onClick={() => setCount((prevCount) => prevCount - 1)}
            disabled={count <= 0}
          >
            -
          </button>
        </div>
        <div className="display_counter">{count}</div>

        <div style={{ margin: "0 10px" }}>
          <button
            className="button_orange"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            +
          </button>
        </div>
      </Row>
    </div>
  );
};

export default ButtonCounter;
