'use client';

import React from 'react';
import ContactPage from '@app/components/ContactPage'; 

import './styleFooter.scss'; // Styling for the footer and banner

const Footer: React.FC = () => {
  return (
    <div>
      {/* Contact Page */}
      <div className="contact-container">
        <ContactPage />
      </div>

      {/* Footer Banner */}
      <footer className="footer-banner">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
