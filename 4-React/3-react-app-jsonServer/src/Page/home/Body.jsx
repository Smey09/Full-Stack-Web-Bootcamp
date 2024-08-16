import { Image, Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../Component/Cards/Card";
// import CardNoDiscount from "../../Component/Card-NoDiscount";
import SaleCard from "../../Component/productCard/SaleCard";
import Materials from "../../Component/productCard/Materials";
import Discount from "../../Component/productCard/Discount";
import DailyBlog from "../../Component/DailyBlog/DailyBlog";

const BodyApp = ({ onAddToCart }) => {
  return (
    <div>
      <div style={{ background: "gray", width: "100%" }}>
        <div
          style={{
            padding: "30px",
          }}
        >
          <Row
            style={{
              paddingLeft: "250px",
              paddingRight: "250px",
            }}
          >
            <Col>
              <div>
                <Image
                  src="assets/image-1.jpg"
                  style={{ width: "auto", height: "450px" }}
                  fluid
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ padding: "30px", background: "gray", height: "450px" }}
              >
                <p>Medicom experienced since 1993 in</p>
                <h2>Medical Equipment Provider</h2>
                <h3>
                  <Row style={{ width: "300px" }}>
                    <Col>Sale up to</Col>
                    <Col style={{ color: "yellow", fontSize: "30px" }}>
                      30% OFF
                    </Col>
                  </Row>
                </h3>
                <div></div>
                <p>
                  Medicom is one of the major supplier of medical and Laboratory
                  Equipment throughout the kingdome.
                </p>
                <button>Shop Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ background: "white" }}>
        {/* catagory */}
        <div
          style={{
            color: "white",
            width: "auto",
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Row>
            <Col>
              <div
                style={{
                  width: "250px",
                  height: "190px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <Col style={{ textAlign: "center" }}>
                    <div style={{ padding: "5px" }}>
                      <Image
                        src="assets/car.jpg"
                        style={{ width: "auto", height: "70px" }}
                        fluid
                      />
                    </div>
                    <p style={{ fontSize: "20px", color: "black" }}>
                      Free Shipping
                    </p>
                    <p style={{ fontSize: "15px", color: "black" }}>
                      Free shipping with discount
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "250px",
                  height: "190px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <Col style={{ textAlign: "center" }}>
                    <div style={{ padding: "5px" }}>
                      <Image
                        src="assets/headerphone.jpg"
                        style={{ width: "auto", height: "70px" }}
                        fluid
                      />
                    </div>
                    <p style={{ fontSize: "20px", color: "black" }}>
                      Free Shipping
                    </p>
                    <p style={{ fontSize: "15px", color: "black" }}>
                      Free shipping with discount
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "250px",
                  height: "190px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <Col style={{ textAlign: "center" }}>
                    <div style={{ padding: "5px" }}>
                      <Image
                        src="assets/shop.jpg"
                        style={{ width: "auto", height: "70px" }}
                        fluid
                      />
                    </div>
                    <p style={{ fontSize: "20px", color: "black" }}>
                      Free Shipping
                    </p>
                    <p style={{ fontSize: "15px", color: "black" }}>
                      Free shipping with discount
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "250px",
                  height: "190px",
                }}
              >
                <div style={{ padding: "20px" }}>
                  <Col style={{ textAlign: "center" }}>
                    <div style={{ padding: "5px" }}>
                      <Image
                        src="assets/image-4.jpg"
                        style={{ width: "auto", height: "70px" }}
                        fluid
                      />
                    </div>
                    <p style={{ fontSize: "20px", color: "black" }}>
                      Free Shipping
                    </p>
                    <p style={{ fontSize: "15px", color: "black" }}>
                      Free shipping with discount
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* ---------------------------------------------- */}
        {/* product */}
        {/* ----------------------------------------------- */}
        <div
          style={{
            color: "white",
            width: "auto",
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingBottom: "20px",
          }}
        >
          <div>
            <h4
              style={{
                color: "black",
                paddingTop: "5px",
                paddingBottom: "10px",
              }}
            >
              Popular Categories
            </h4>
            <div>
              <Row>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-1.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "black" }}>
                          Syringe and needles
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-2.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "black" }}>
                          Suture
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-3.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "black" }}>
                          Blood Bag
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-4.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "black" }}>
                          Blood Lancet
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-5.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "black" }}>
                          Urine Bag
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "150px",
                      height: "180px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        <div style={{ padding: "5px" }}>
                          <Image
                            src="assets/products/image-6.jpg"
                            style={{ width: "auto", height: "90px" }}
                            fluid
                          />
                        </div>
                        <p style={{ fontSize: "12px", color: "green" }}>
                          Medical Tube
                        </p>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* ---------------------------------------------------------------- */}

            {/* Start Popular Products */}

            {/* ---------------------------------------------------------------- */}

            <div style={{ paddingTop: "10px" }}>
              <div style={{ paddingBottom: "10px" }}>
                <h4
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Popular Products
                </h4>
              </div>
              <Container>
                <ProductCard onAddToCart={onAddToCart} />
              </Container>
            </div>

            {/* ---------------------------------------------------------------- */}

            {/* end Popular Products */}

            {/* ---------------------------------------------------------------- */}

            {/* Start Card Products */}
            <div
              style={{
                // background: "red",
                marginTop: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Row>
                <Col>
                  <SaleCard />
                </Col>
                <Col>
                  <Materials />
                </Col>
                <Col>
                  <Discount />
                </Col>
              </Row>
            </div>
            {/* ---------------------------------------------------------------- */}

            {/* end Card Products */}

            {/* ---------------------------------------------------------------- */}
            <div>
              <Row>
                <Col
                  style={{
                    paddingBottom: "10px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Daily Blog
                </Col>
              </Row>
              <div>
                <DailyBlog />
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div
        style={{
          background: "white",
          border: "1px solid gray",
          borderRadius: "8px",
        }}
      >
        <Row style={{ padding: "40px", textAlign: "center" }}>
          <Col>
            <Image
              src="assets/Sponser/sp-1.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
          <Col>
            <Image
              src="assets/Sponser/sp-2.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
          <Col>
            <Image
              src="assets/Sponser/sp-3.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
          <Col>
            <Image
              src="assets/Sponser/sp-4.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
          <Col>
            <Image
              src="assets/Sponser/sp-5.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
          <Col>
            <Image
              src="assets/Sponser/sp-6.png"
              style={{ width: "auto", height: "50px" }}
              fluid
            />
          </Col>
        </Row>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div
        style={{
          color: "black",
          paddingTop: "5px",
        }}
      >
        <Image
          src="assets/foooter.jpeg"
          style={{ width: "auto", height: "100%" }}
          fluid
        />
        <div
          style={{
            color: "black",
            paddingTop: "5px",
            background: "LightSlateGray",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginTop: "20px",
              marginLeft: "80px",
              marginRight: "80px",
              marginBottom: "50px",
            }}
          >
            <Row>
              <Col>
                <div
                  style={{
                    textAlign: "start",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  <Image
                    src="assets/logo-web.jpg"
                    style={{ width: "auto", height: "30px" }}
                    fluid
                  />
                  <p>
                    Address: No.2A, Down Town Road No 7, Phum Kork Chambak,Phnom
                    Penh
                  </p>
                  <p>Office: (+855) 088 5654 093</p>
                  <p>Support: info@medi.com</p>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "start",
                    fontSize: "15px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "initial",
                    }}
                  >
                    My Account
                  </p>
                  <div style={{ color: "lightgray", fontSize: "14px" }}>
                    <p>Order History</p>
                    <p>Shoping Cart</p>
                    <p>Wishlist</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "start",
                    fontSize: "17px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "initial",
                    }}
                  >
                    Helps
                  </p>
                  <div style={{ color: "lightgray", fontSize: "14px" }}>
                    <p>Contact</p>
                    <p>Faqs</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "start",
                    fontSize: "17px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "initial",
                    }}
                  >
                    Proxy
                  </p>
                  <div style={{ color: "lightgray", fontSize: "14px" }}>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Product</p>
                    <p>Track Order</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "start",
                    fontSize: "17px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "initial",
                    }}
                  >
                    Categories
                  </p>
                  <div style={{ color: "lightgray", fontSize: "14px" }}>
                    <p>Fruit & Vegetables</p>
                    <p>Meat & Fish</p>
                    <p>Bread & Bakery</p>
                    <p>Beauty & Health</p>
                  </div>
                </div>
              </Col>
              <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />
              <p style={{ color: "lightgray", fontSize: "12px" }}>
                Developed by Digital Solution
              </p>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyApp;
