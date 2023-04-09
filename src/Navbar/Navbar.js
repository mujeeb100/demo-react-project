import React from "react";
import "./Navabr.css";
import muscular from "../Images/muscular-model-man.png";

function Navbar() {
  return (
    <div className="_Nav_header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand text-white">RIGHTFIT.COM </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>
            <li class="nav-item"></li>
            <li class="nav-item dropdown"></li>
            <li class="nav-item"></li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="mr-sm-2 text-white">All Products</div>
            <div class="mx-4 my-sm-0 text-white">Featured Products</div>
            <div class="mx-4 my-sm-2 text-white">logo </div>
          </form>
        </div>
      </nav>
      <div>
        <img src={muscular} class="img-fluid" alt="Responsive image" />
      </div>
    </div>
  );
}

export default Navbar;
