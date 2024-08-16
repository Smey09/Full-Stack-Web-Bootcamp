import { Image, Col, Row, Button } from "react-bootstrap";

const Materials = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Image
        src="assets/bg-card/bg-3.jpg"
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
            NEW PRODUCTS
          </h4>
          <h2 style={{ fontSize: "40px", color: "white" }}>Materials Doctor</h2>
          <div
            style={{
              padding: "10px",
              marginLeft: "70px",
              marginRight: "20px",
              width: "190px",
            }}
          >
            <Row>
              <Col>Started at</Col>
              <Col>
                <h4 style={{ color: "red", fontSize: "20px" }}>$79.99</h4>
              </Col>
            </Row>
          </div>
          <Button
            size="sm"
            style={{
              padding: "5px",
              borderRadius: "15px",
              background: "white",
            }}
          >
            <span
              style={{ marginRight: "10px", fontSize: "20px", color: "green" }}
            >
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

export default Materials;
