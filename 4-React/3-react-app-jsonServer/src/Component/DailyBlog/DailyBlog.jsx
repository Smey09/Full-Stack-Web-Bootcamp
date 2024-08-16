import { Col, Row } from "react-bootstrap";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

const DailyBlog = () => {
  return (
    <div>
      <Row>
        <Col>
          <Item1 />
        </Col>
        <Col>
          <Item2 />
        </Col>
        <Col>
          <Item3 />
        </Col>
      </Row>
    </div>
  );
};

export default DailyBlog;
