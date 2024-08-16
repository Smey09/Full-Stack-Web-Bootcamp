import React, { useState } from "react";
import { Modal, Button, Table, Row } from "react-bootstrap";

const CartDetails = ({ cartItems }) => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {showModal && (
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <tr>
                <th>Total: </th>
                <th style={{ color: "red" }}>${totalPrice}</th>
              </tr>
            </Row>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CartDetails;
