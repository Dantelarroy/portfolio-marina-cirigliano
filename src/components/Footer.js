// src/components/Footer.js

import React from "react";

console.log("Footer component loaded");

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Marina Cirigliano. Todos los derechos reservados.</p>
        <div className="space-x-4 mt-2">
          <a href="https://www.instagram.com/marina" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/marina" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
