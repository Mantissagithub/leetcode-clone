// src/layout/Footer.tsx
import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500">
      Copyright © {new Date().getFullYear()} LEETCODE . All rights reserved.
    </footer>
  );
};

export default Footer;