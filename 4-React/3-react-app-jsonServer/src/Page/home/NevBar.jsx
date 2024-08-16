import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Image, Button } from "react-bootstrap";

const NevBar = ({ cartTotal, onViewCartDetails }) => {
  return (
    <div>
      {/* Start Row 1 */}
      <div
        style={{
          color: "black",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tr style={{ height: "50px" }}>
            <td>
              Store location: No.2A, Down Town Road No 7, Phum Kork Chambak,
              Phnom Penh
            </td>
            <td>Eng</td>
            <td>|</td>
            <td>Sign in</td>
            <td>Sign up</td>
          </tr>
        </table>
      </div>
      {/* End Row 1 */}

      {/* Start Row 2 */}
      <div
        style={{
          color: "black",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <tr>
            <td style={{ width: "35%" }}>
              <Image
                src="assets/logo-web.jpg"
                roundedCircle
                style={{ height: "40px", width: "auto" }}
                alt="Profile"
              />
            </td>
            <td
              style={{
                width: "30%",
                textAlign: "start",
                paddingRight: "10px",
                color: "black",
              }}
            >
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
              </InputGroup>
            </td>
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                padding: "10px",
                color: "black",
              }}
            >
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>Favorite</td>
                    <td>|</td>
                    <td>
                      <Button
                        variant="light"
                        style={{
                          backgroundColor: "green",
                          borderRadius: "30px",
                          color: "white",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onClick={onViewCartDetails}
                      >
                        Shop ({cartTotal} items)
                      </Button>
                    </td>
                    <td>Shopping Cart :</td>
                    <td style={{ fontSize: "30px" }}>0$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </tr>
        </table>
      </div>
      {/* End Row 2 */}

      {/* Start Row 3 */}
      <div style={{ color: "black", fontFamily: "Arial, sans-serif" }}>
        <table
          style={{
            width: "100%",
            backgroundColor: "black",
          }}
        >
          <tr>
            <div
              style={{
                textAlign: "center",
                fontSize: "16px",
                padding: "5px",
                color: "white",
              }}
            >
              <table style={{ width: "60%" }}>
                <tbody>
                  <tr>
                    <td>Home</td>
                    <td>Shop</td>
                    <td>Blog</td>
                    <td>About Us</td>
                    <td>Contact Us</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <td
              style={{
                textAlign: "end",
                paddingRight: "20px",
                color: "white",
              }}
            >
              Call : (+855) 088 5654 093
            </td>
          </tr>
        </table>
      </div>
      {/* End Row 3 */}
    </div>
  );
};

export default NevBar;
