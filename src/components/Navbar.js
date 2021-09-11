import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
const Navbar = () =>{
      return(
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </Link>
          <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <div className="navbar-item has-dropdown is-hoverable" disabled>
              <Link className="navbar-link" to="" disabled>
                Docs
              </Link>             
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms" disabled="disabled">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip" disabled="disabled">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      )
}

export default Navbar;