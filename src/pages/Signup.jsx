import React from "react";
import BackgroundImage from "../component/BackgroundImage";
import Header from "../component/Header";
import styled from "styled-components";

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
`;

const SignUp = () => {
  return (
    <Container>
      <Header />
      <div className="body flex column a-center j-center content">
        <div className="text flex column">
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
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button>Get Started</button>
          </div>
          <button>Log In</button>
        </div>
      </div>
      <BackgroundImage />
      <div className="content"></div>
    </Container>
  );
};

export default SignUp;
