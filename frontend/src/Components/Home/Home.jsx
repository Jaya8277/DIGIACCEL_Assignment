import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Link id="tech" to="/addquestion"> Teacher Login</Link>
      <Link id="tech"> Student Login</Link>
    </div>
  );
};

export default Home;
