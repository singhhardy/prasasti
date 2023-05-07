import React from "react";
import ".././paging/style.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  p-0">
        <div className="container-fluid">
        <a href="#" ><img src="logo.png" width="100px" alt="logo"/></a>
          <button
            className="navbar-toggler p-outline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center justify-content-center">
              <li className="nav-item">
                <a className="nav-link nav-text  mx-3 fs-6  nav-textactive" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text fs-6 mx-3" href="/achievements">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text  fs-6 mx-3" href="/about-us">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text fs-6 mx-3" href="/solutions">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                <button className="primary-btn rounded-pill px-4 py-2 fs-6 " type="submit">
              Contact Us
            </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
