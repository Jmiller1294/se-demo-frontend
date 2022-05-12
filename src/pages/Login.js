import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginForm = styled.form`
  background: white;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  width: 550px;
  padding: 30px 75px;
`
const Header = styled.h1`
  margin-top: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`
const Label = styled.label`
  color: #3d3d3d;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
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
  height: 45px;
  width: 50%;
  background-color: #e92c2c;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px auto;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 10px;

  &:hover {
    opacity:1;
  }
`
const AdminLink = styled.a`
`

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if(loggedIn) {
      console.log('logged in')
      navigate('/');
    } 
    else {
      console.log('not signed in');
    }
  }, [loggedIn, navigate])

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
        setLoggedIn(resp.data);
      })
  }


  return (
    <>
      <LoginForm>
        <Header>Customer Sign-in</Header>
            <Label for="email"><b>Email</b></Label><br />
            <Input onChange={(e) => handleEmailChange(e)} type="text" placeholder="Enter Email" name="email" required />
            <br />
            <Label for="psw"><b>Password</b></Label><br />
            <Input onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Enter Password" name="psw" required />
            <SubmitButton onClick={(e) => handleSubmit(e)}type="submit">Submit</SubmitButton>
            <AdminLink href="/admin-login"><h2>Administer Login</h2></AdminLink>
      </LoginForm>
    </>
  )
}
export default Login;