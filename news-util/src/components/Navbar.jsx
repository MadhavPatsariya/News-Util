import React from 'react'
import newspaperIcon from '../utils/news-util.png';
export default function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <img src={newspaperIcon} alt="Newspaper Icon"style={{width: "4rem",  height: "4rem", objectFit: "contain", marginRight: '0.5rem'}}/>
    <a className="navbar-brand" href="#">
      News-Util
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
