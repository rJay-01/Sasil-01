import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Artify NFTs. All Rights Reserved.</p>
        <p className="mt-2">
          Follow us on:
          <a href="#" className="ml-2 hover:text-gray-400">Instagram</a> |
          <a href="#" className="ml-2 hover:text-gray-400">Twitter</a> |
          <a href="#" className="ml-2 hover:text-gray-400">Discord</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
