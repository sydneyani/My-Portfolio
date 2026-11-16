import React from 'react';
import ContactLinks from './ContactLinks';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="section-heading">
          <p className="section-index">06</p>
          <h2>Contact</h2>
        </div>
        <p>Houston, TX</p>
        <ContactLinks />
      </div>
    </footer>
  );
}

export default Footer;
