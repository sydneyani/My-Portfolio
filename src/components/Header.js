import React from 'react';
import ContactLinks from './ContactLinks';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <div className="hero-copy">
        <p className="eyebrow">Houston, TX</p>
        <h1 id="intro-heading">Sydney Ani</h1>
        <p className="headline">BI / Data Warehouse Developer &amp; Applied AI Engineer</p>
        <p className="value-prop">
          I build Snowflake warehouses, apply AI to data validation, and ship software in C#, Flutter, and Python.
        </p>
        <ContactLinks className="contact-links hero-actions" />
      </div>
      <div className="portrait">
        <img
          src={`${process.env.PUBLIC_URL}/images/cb9cad23320df3bb-sticker.png`}
          alt="Illustrated portrait of Sydney Ani"
          width="420"
          height="420"
        />
      </div>
    </section>
  );
}

function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#intro-heading">Sydney Ani</a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
