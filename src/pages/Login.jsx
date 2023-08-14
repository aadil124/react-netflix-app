import React, { useState } from "react";
import BackgroundImage from "../component/BackgroundImage";
import Header from "../component/Header";
import styled from "styled-components";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleLogIn = async () => {
    console.log(formValues);
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="from-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <button onClick={handleLogIn} className="button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 90vh;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }
  .body {
    gap: 1rem;
    text-align: center;
    font-size: 1rem;
    h1 {
      padding: 0 25rem;
    }
    .form {
      display: grid;
      grid-template-columns:${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"}
      width: 60%;
      input {
        color: black;
        border: none;
        padding: 1rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;

        }
      }
      .button {
        padding: 0.5rem 1rem;
        background-color: #E50914;
        border: none;
        cursor: pointer;
        border-radius: 0;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
    .button {
      padding: 0.5rem 1rem;
      background-color: #E50914;
      border: none;
      cursor: pointer;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
`;

export default Login;
