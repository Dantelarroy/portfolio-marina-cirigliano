// src/components/Navbar.js
import React from "react";

console.log("Navbar Component Loaded");
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Marina Cirigliano</div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:underline">Inicio</a>
          <a href="/about" className="text-white hover:underline">Sobre mí</a>
          <a href="/proyectos" className="text-white hover:underline">Proyectos</a>
          <a href="/contact" className="text-white hover:underline">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

  