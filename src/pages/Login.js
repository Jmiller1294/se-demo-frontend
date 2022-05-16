import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../layout/NavBar";
import TopHeader from "../layout/TopHeader";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const LoginForm = styled.form`
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto 0 auto;
  height: 440px;
  width: 500px;
  padding: 15px 75px 30px 75px;
`
const Header = styled.h2`
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`
const Label = styled.label`
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
`
const Input = styled.input`
  border: none;
  background: #f1f1f1;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 45px;
`
const SubmitButton = styled.button`
  height: 40px;
  width: 60%;
  background-color: #e92c2c;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  margin: 20px auto;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 10px;

  &:hover {
    opacity:1;
  }
`

const SignupButton = styled.button`
  height: 40px;
  width: 60%;
  background-color: #e92c2c;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  margin: 10px auto;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 10px;

  &:hover {
    opacity:1;
  }
`
const AdminLink = styled.a`
  font-size: 20px;
  height: 100px;
 
  color: red;

  &:visited {
    color: red;
  }
`
const ButtonContainer = styled.div`
  height: 100px;
  width: 500px;
  border: 1px solid #dedede;
  margin: 0 auto;
  padding: 0 75px;
`

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if(loggedIn) {
      console.log(currentUser);
      if(currentUser.organization === 'fire') navigate('/fire-products');
      if(currentUser.organization === 'police') navigate('/police-products');
    } 
    else {
      console.log('not signed in');
    }
  }, [loggedIn, navigate, currentUser])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      email: email,
      password: password
    }

    axios.post('http://localhost:8000/users/login', { data })
      .then(resp => {
        setLoggedIn(resp.data.loggedIn);
        setCurrentUser(resp.data.user);
      })
  }


  return (
    <>
      <TopHeader />
      <NavBar />
      <LoginForm>
        <Header>Customer Sign-in</Header>
            <Label for="email"><b>Email</b></Label><br />
            <Input onChange={(e) => handleEmailChange(e)} type="text" placeholder="Enter Email" name="email" required />
            <br />
            <Label for="psw"><b>Password</b></Label><br />
            <Input onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Enter Password" name="psw" required />
            <SubmitButton onClick={(e) => handleSubmit(e)}type="submit">Sign in</SubmitButton>
            <div>
              <AdminLink href="/admin-login">Administrator Login</AdminLink>
              <br />
              <br />
              <AdminLink href="/moderator-login">Moderator Login</AdminLink>
            </div>
      </LoginForm>
      <ButtonContainer>
        <br />
        New Customer?
        <br/>
        <SignupButton onClick={(e) => handleSubmit(e)}type="submit">Create Account</SignupButton>
      </ButtonContainer>
    </>
  )
}
export default Login;