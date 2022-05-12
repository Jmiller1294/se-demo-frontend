import React from "react";
import '../styles/Home.css';
import '../styles/Style.css';
import '../styles/Form.css';
import '../styles/Slideshow.css';


const Login = () => {
  return (
    <>
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