import React from 'react';

const links = [
  { label: 'Email', href: 'mailto:580091sydney@gmail.com' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sydney-ani-1561471b8',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sydneyani',
    external: true,
  },
];

function ContactLinks({ className = 'contact-links', label = 'Contact' }) {
  return (
    <ul className={className} aria-label={label}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactLinks;
