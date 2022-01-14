import React, { useEffect } from "react";
import styled from "styled-components";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAPI } from "../../actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const history = useNavigate();

  useEffect(() => {
    {
      user && history("/home");
    }
  }, []);

  return (
    <div className="container">
      {user && history("/home")}
      <Nav>
        <span href="/">
          <img src="/images/login-logo.svg" alt="" />
        </span>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>

      <div className="section">
        <div className="hero_text">
          <h1>Welcome to your professional community</h1>
        </div>
        <img className="hero_img" src="/images/login-hero.svg" alt="" />
      </div>
      <div className="google_login" onClick={() => dispatch(signInAPI())}>
        <img src="/images/google.svg" alt="" />{" "}
        <span> Sign in with google </span>
      </div>

      {/* <div>
        <img src="/images/google.svg" alt="" />
        <span className="google_text"> Sign in with google</span>
      </div> */}
    </div>
  );
};

const Nav = styled.nav`
  /* background-color: white; */
  max-width: 1128px;
  margin: auto;
  padding: 16px 0px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;
  z-index: 999;
  & > span {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0px 5px;
      width: 120px;
      height: 26px;
    }
  }
`;

const Join = styled.a`
  font-size: 1.6rem;
  padding: 10px 12px;
  text-decoration: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  font-weight: 600;
  @media (max-width: 359px) {
    margin-right: 4px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  padding: 1rem 2.4rem;
  font-size: 1.6rem;
  transition-duration: 0.17s;
  font-weight: 600;
  /* line-height: 4rem; */
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 359px) {
    padding: 8px 16px;
    /* line-height: 30px; */
  }
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
export default Login;
