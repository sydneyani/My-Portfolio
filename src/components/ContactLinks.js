import React from 'react';
import { contact } from '../data/profile';

const links = [
  { label: 'GitHub', href: contact.github, external: true },
  { label: 'LinkedIn', href: contact.linkedin, external: true },
  { label: 'Resume', href: contact.resume, external: true },
  { label: 'Email', href: contact.email, external: false },
];

function ContactLinks({ className = 'contact-links' }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
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
