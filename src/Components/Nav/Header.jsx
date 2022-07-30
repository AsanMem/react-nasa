import React from "react";
import logo from "../../video/NASA_logo.png";
import { Link } from "react-router-dom";
import style from './style.module.css'

export default function Header() {
  return (
    <nav>
      <div className={style.containerFluid}>
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt=""
            width="85"
            height="70"
            className="d-inline-block align-text-top x-large"
          />
        </Link>
        <div className={style.navLinks}>

        
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active text-white text123"
              aria-current="page"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/day" className="nav-link text-white">
            Photo of the day
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">
            Asteroids
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
