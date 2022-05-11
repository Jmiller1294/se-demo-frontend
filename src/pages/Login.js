import React from "react";
import '../styles/Home.css';
import '../styles/Style.css';
import '../styles/Form.css';
import '../styles/Slideshow.css';


const Login = () => {
  return (
    <>
      <div class = "topnav">
        <div id = "title">
            <h1>First Responder Equipment</h1>
        </div>
        <div class="search">
            <input class = "search" type="text" placeholder="Search.."/>
        </div>
        <div class="links">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/contact">Contact</a>
        </div>  
      </div>
      <form action="">
        <div class="container">
           <h1>Costumer Sign-in</h1>
           <hr />
           <label class ="form-lable" for="email"><b>Email</b></label><br />
           <input type="text" placeholder="Enter Email" name="email" required />
           <br />
           <label class ="form-lable" for="psw"><b>Password</b></label><br />
           <input type="password" placeholder="Enter Password" name="psw" required />
           <div class="submit-button">
            <button type="submit" class="signup-button">Submit</button>
          </div>
          <a class="admin" href="admin-sign-in.html"><h2>Administer Login</h2></a>
        </div>
      </form>
    </>
  )
}
export default Login;