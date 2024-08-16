import { Image, Col, Row, Button } from "react-bootstrap";

const Discount = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Image
        src="assets/bg-card/bg-1.jpg"
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
            SUMMER SALE
          </h4>
          <h2 style={{ fontSize: "40px", color: "black" }}>Discount</h2>
          <div
            style={{
              padding: "10px",
              marginLeft: "70px",
              width: "220px",
            }}
          >
            <Row>
              <Col>Up to</Col>
              <Col>
                <h4
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    color: "orange",
                    fontSize: "18px",
                    background: "green",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  64% OFF
                </h4>
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

export default Discount;
