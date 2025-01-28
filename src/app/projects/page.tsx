'use client';

import React from 'react';
import Footer from '@app/components/footer'; // Import Footer component

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Main content of your homepage */}
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage content.</p>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
