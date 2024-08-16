import { Card, Col, Row, Image } from "react-bootstrap";

const Item1 = () => {
  return (
    <div style={{ width: "18rem", position: "relative" }}>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="assets/bg-card/bg-6.jpg" />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "15%",
            transform: "translate(-50%, -50%)",
            color: "black",
          }}
        >
          <div
            style={{
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "3px",
              padding: "5px",
              height: "70px",
              width: "60px",
            }}
          >
            <h4>18</h4>
            <p>NOV</p>
          </div>
        </div>
        <div style={{ padding: "5px" }}>
          <Row style={{ fontSize: "10px" }}>
            <Col>Food</Col>
            <Col>By Admin</Col>
            <Col>65 Comments</Col>
          </Row>
          <p>
            Curabitur porttitor orci eget neque accumsan venenatis. Nunc
            fermentum.
          </p>
          <div>
            <span
              style={{ marginRight: "10px", fontSize: "10px", color: "green" }}
            >
              Read More
            </span>
            <Image
              src="assets/Icons/arrow-icon-green.png"
              fluid
              style={{ height: "10px" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Item1;
