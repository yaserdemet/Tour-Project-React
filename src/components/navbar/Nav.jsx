import React from 'react'
import navBar from "./nav.module.css"

const Nav = () => {
  return (
    <div className={navBar["container"]}>
          <ul className={navBar["list"]}>
            <li>ABOUT US</li>
            <li>FOR YOU</li>
            <li>SERVICES</li>
            <li>BLOG</li>
            <li>VLOG</li>
            <li>CONTACT</li>
          </ul>


    </div>
  )
}

export default Nav