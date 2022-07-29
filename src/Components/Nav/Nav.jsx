import React from "react"
import logo from '../../video/NASA_logo.png'
import {Link} from 'react-router-dom'

export default function Nav () {
  return (
      <nav>
        <div className="container-fluid">
        <Link to='/' className="navbar-brand" >
      <img src={logo} alt="" width="85" height="70" className="d-inline-block align-text-top x-large"/>
   </Link>
  </div>
          <ul className="nav justify-content-center">
          <li className="nav-item">
          <Link to='/'  className="nav-link active text-white text123" aria-current="page" >Поиск</Link>
          </li>
          <li className="nav-item">
          <Link to='/day' className="nav-link text-white" >Фото дня</Link>
          </li>
          <li className="nav-item">
          <Link to='/about' className="nav-link text-white" >Астероиды</Link>
          </li>
        </ul>
      </nav>
     )
}
