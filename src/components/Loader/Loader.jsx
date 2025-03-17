import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loadingspinner}>
        <div id={style.square1}></div>
        <div id={style.square2}></div>
        <div id={style.square3}></div>
        <div id={style.square4}></div>
        <div id={style.square5}></div>
    </div>
  )
}

export default Loader