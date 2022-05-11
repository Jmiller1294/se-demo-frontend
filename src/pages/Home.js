import React from "react";
import '../styles/Home.css';
import '../styles/Style.css';

const Home = () => {
  return (
    <>
      <div class = "topnav">
        <div id = "title">
            <h1>First Responder Equipment</h1>
        </div>
        <div class="search">
            <input class = "search" type="text" placeholder="Search.." />
        </div>
        <div class="links">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/contact">Contact</a>
        </div>  
      </div>
    </>
  )
}
export default Home;