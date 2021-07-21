import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    
    let year = "K's & M's Music Playlist Hosting " + new Date().getFullYear();
    
    return (

      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-site-links">
            <a href="about">about</a>
            <a href="newsletter">newsletter</a>
            <a href="product">product page</a>
          </div>

          <div className="footer-copyright">
            <i class="far fa-copyright"></i>
            <p id="copyright-year">{year}</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Footer;