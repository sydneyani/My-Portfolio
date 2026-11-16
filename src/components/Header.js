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
      <div>
        <p className="eyebrow">Houston, TX</p>
        <h1 id="intro-heading">Sydney Ani</h1>
        <p className="role">
          BI / Data Warehouse Developer
          <span className="role-detail">Applied AI, Data &amp; Software Engineering</span>
        </p>
        <p className="lede">
          I have 5+ years of enterprise technology experience across data warehousing, BI, software engineering, and applied machine learning. I work in Snowflake every day, apply AI to data validation and engineering workflows, and build applications in C#, Flutter, and Python.
        </p>
        <p className="lede">
          Currently a BI – Data Warehouse Developer at NOV/Auredia.
        </p>
        <ContactLinks />
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
