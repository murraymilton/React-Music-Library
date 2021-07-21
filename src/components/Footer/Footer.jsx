import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    
    const currentYear = new Date().getFullYear();
    return (

        
      <p>Copyright © {currentYear}</p>
      
    )
  }
}

export default Footer;