import React from "react";
import logo from "../../video/NASA_logo.png";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
  return (
    <nav className={style.topMenu}>
      <Link to="/" className={style.logo}>
        <img
          src={logo}
          alt=""
          width="85"
          height="70"
          className="d-inline-block align-text-top x-large"
        />
      </Link>

      <ul className={style.menuMain}>
        <li>
          <Link to="/" aria-current="page">
            Search
          </Link>
        </li>
        <li>
          <Link to="/day">Photo of the day</Link>
        </li>
        <li>
          <Link to="/video">Videos</Link>
        </li>
        <li>
          <Link to="/about">Asteroids</Link>
        </li>
      </ul>
    </nav>
  );
}
