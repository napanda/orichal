import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginDialog from "./LoginDialog";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log("header", isAuthenticated);
    if (localStorage.getItem("login") === "true") {
      setIsAuthenticated(true);
      history.push("/user");
    }
  }, []);

  const onAuthLogin = (success) => {
    setIsAuthenticated(success);
    setShowLoginModal(false);
    if (success) {
      localStorage.setItem("login", "true");
      history.push("/user");
    }
  };
  const handleLogin = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      setIsAuthenticated(false);
      setShowLoginModal(false);
      localStorage.setItem("login", "false");
      history.push("/");
    }
  };
  return (
    <>
      <Navbar expand="md">
        <Navbar.Brand href="#">ORICHAL</Navbar.Brand>
        <Nav onSelect={() => handleLogin()}>
          <Nav.Link eventKey="loginState">
            {isAuthenticated ? "Logout" : "Login"}
          </Nav.Link>
        </Nav>
      </Navbar>
      <LoginDialog show={showLoginModal} onAuthLogin={(e) => onAuthLogin(e)} />
    </>
  );
};

export default Header;
