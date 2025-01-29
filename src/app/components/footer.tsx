"use client";

import React from "react";
import ContactPage from "@app/components/ContactPage";

import "./styleFooter.scss"; // Styling for the footer and banner

const Footer: React.FC = () => {
  return (
    <main>
      <div>
      <ContactPage />
      </div>
      <footer className="footer-banner">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
