import React from 'react';
import ContactLinks from './ContactLinks';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <h2>Contact</h2>
        <p>Houston, TX</p>
        <ContactLinks />
      </div>
    </footer>
  );
}

export default Footer;
