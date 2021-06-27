import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginDialog = ({ onAuthLogin, show }) => {
  const submit = (t) => {
    onAuthLogin(t);
  };
  return (
    <>
      <Modal show={show} animation={false}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="loginUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your user name." />
              {/* <Form.Text className="text-muted">(Required)</Form.Text> */}
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="Enter your password." />
              {/* <Form.Text className="text-muted">(Required)</Form.Text> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => submit(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => submit(true)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginDialog;
