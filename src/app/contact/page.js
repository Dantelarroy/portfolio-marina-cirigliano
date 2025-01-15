// src/app/contact.js

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctame</h1>

      {/* Enlaces a LinkedIn e Instagram */}
      <div className="mt-8">
        <div className="mt-4 flex space-x-4">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
