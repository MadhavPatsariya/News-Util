import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newspaperIcon from '../utils/news-util.png';
import lightMode from '../utils/brightness-high.svg';
import darkMode from '../utils/brightness-high-fill.svg'
export default function Navbar(props) {
  const lightColor = { backgroundColor: '#fffceb' };
  const darkColor = { backgroundColor: '#e1e2ea' };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={props.mode === 'light' ? lightColor : darkColor}>
        <div className="container-fluid">
          <img src={newspaperIcon} alt="Newspaper Icon" style={{ width: "4rem", height: "4rem", objectFit: "contain", marginRight: '0.5rem' }} />
          <Link className="navbar-brand" to="/">
            News-Util
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
          <div>
          {props.mode === 'light' ? (<img  src={lightMode} alt="light-icon" style={{width: '1.5rem', marginLeft: '1rem', marginRight: '1rem'}}/>)
            :  (<img  src={darkMode} alt="dark-icon" style={{width: '1.5rem', marginLeft: '0.5rem', marginRight: '1rem'}}/>) }
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
          </div>
        </div>
      </nav>
    </div>
  )
}
