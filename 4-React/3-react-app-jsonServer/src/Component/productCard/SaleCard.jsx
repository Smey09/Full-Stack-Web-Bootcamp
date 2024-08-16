import React from "react";
import { Image, Col, Row, Button } from "react-bootstrap";

const SaleCard = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Image
        src="assets/bg-card/bg-2.jpg"
        style={{ width: "auto", height: "469px" }}
        fluid
      />
      <Col>
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            width: "90%",
          }}
        >
          <h4 style={{ fontSize: "18px", fontWeight: "initial" }}>
            BEST DEALS
          </h4>
          <h2 style={{ fontSize: "40px" }}>Sale of the Month</h2>
          <div
            style={{ padding: "10px", marginLeft: "20px", marginRight: "20px" }}
          >
            <Row>
              <Col>
                <h3>00</h3>
                <p>DAYS</p>
              </Col>
              <Col>
                <h3>02</h3>
                <p>HOURS</p>
              </Col>
              <Col>
                <h3>18</h3>
                <p>MINS</p>
              </Col>
              <Col>
                <h3>46</h3>
                <p>SECS</p>
              </Col>
            </Row>
          </div>
          <Button
            size="sm"
            style={{
              padding: "5px",
              borderRadius: "15px",
              background: "green",
            }}
          >
            <span style={{ marginRight: "10px", fontSize: "20px" }}>
              Shop Now
            </span>
            <Image
              src="assets/Icons/right-arrow.png"
              fluid
              style={{ height: "30px" }}
            />
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default SaleCard;
