import React from "react";
import logo from "../assets/logo.png";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Netflix Logo" />
      </div>
      <button onClick={navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Login" : "Signup"}
      </button>
    </Container>
  );
};

export default Header;
