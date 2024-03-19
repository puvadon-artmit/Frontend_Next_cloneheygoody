import React from 'react'

import '../css/Drobdown.css'

const Drobdown = () => {
  return (
    <div>
        <div className="menu-bar">
      <h1 className="logo">Light<span>Code.</span></h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pages <i className="fas fa-caret-down"></i></a>
            <div className="dropdown-menu">
                <ul>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li>
                    <a href="#">Team <i className="fas fa-caret-right"></i></a>
                    
                    <div className="dropdown-menu-1">
                      <ul>
                        <li><a href="#">Team-1</a></li>
                        <li><a href="#">Team-2</a></li>
                        <li><a href="#">Team-3</a></li>
                        <li><a href="#">Team-4</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
        </li>
        <li><a href="#">Blog</a>
        </li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </div>
    <div className="hero">
      &nbsp;
    </div>
    </div>
  )
}

export default Drobdown