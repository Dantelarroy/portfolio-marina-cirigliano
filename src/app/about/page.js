// src/app/about/page.js
import Navbar from "../../components/Navbar";  // Ruta desde /src/app/about/page.js
import Footer from "../../components/Footer";  // Ruta desde /src/app/about/page.js

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido de la página About */}
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Marina Cirigliano</h1>
        <p className="text-xl text-gray-700 mb-8">
          Aquí va la descripción de la productora y estilista, su experiencia y servicios.
          <br /><br />
          Altura: 1.86 m<br />
          Talle de zapatos: 42.5
        </p>
        <a href="/contact" className="text-blue-600 hover:underline">Contáctame</a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
