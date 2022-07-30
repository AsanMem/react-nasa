

import React from 'react'
import Header from '../Nav/Header'
import CardSearch from './CardSearch'
import Search from '../Search/Search'
import nasa from '../../video/nasa2.mp4'
import style from "./style.module.css";


export default function Main() {
  return (
    <div className='Main'>

      <video className={style.videoBackground} src={nasa} autoPlay loop muted>
        <source  type="video/mp4"/>
       </video>
       <Header/>
      <Search/>
    </div>
  
  )
}

