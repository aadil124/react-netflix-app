import React, { useState } from "react";
import BackgroundImage from "../component/BackgroundImage";
import Header from "../component/Header";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    console.log(formValues);
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column">
          <div className="text flex column a-center j-center">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
            <div className="form">
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

              {showPassword && (
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
              )}

              {!showPassword && (
                <button
                  onClick={() => setShowPassword(true)}
                  className="button"
                >
                  Get Started
                </button>
              )}
            </div>

            <button className="button" onClick={handleSignIn}>
              Sign Up
            </button>
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

export default SignUp;
