'use client';

import { useState, useEffect } from 'react';
import 'animate.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center p-6"
      style={{ backgroundImage: "url('/images/foto_portada.jpeg')" }} 
    >
      {loading ? (
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-gray-300 border-t-blue-600 rounded-full mt-10 z-10" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">Marina Cirigliano</h1>
          <p className="text-xl text-gray-100 mb-8 animate__animated animate__fadeIn animate__delay-2s">Producer & Stylist</p>

          <div className="space-y-6">
            <a 
              href="/about" 
              className="inline-block text-white text-sm font-bold uppercase py-2 px-6 border-2 border-white rounded-full transition duration-300 hover:bg-white hover:text-gray-900"
              style={{
                borderRadius: '23px',
                fontFamily: 'Arial',
                fontSize: '16px',
                lineHeight: '40px',
                backgroundColor: 'rgba(97, 97, 97, 0)',
                border: 'none',
              }}
            >
              ABOUT ME
            </a>
            <a 
              href="/proyectos" 
              className="inline-block text-white text-sm font-bold uppercase py-2 px-6 border-2 border-white rounded-full transition duration-300 hover:bg-white hover:text-gray-900"
              style={{
                borderRadius: '23px',
                fontFamily: 'Arial',
                fontSize: '16px',
                lineHeight: '40px',
                backgroundColor: 'rgba(97, 97, 97, 0)',
                border: 'none',
              }}
            >
              PROJECTS
            </a>
            <a 
              href="/contact" 
              className="inline-block text-white text-sm font-bold uppercase py-2 px-6 border-2 border-white rounded-full transition duration-300 hover:bg-white hover:text-gray-900"
              style={{
                borderRadius: '23px',
                fontFamily: 'Arial',
                fontSize: '16px',
                lineHeight: '40px',
                backgroundColor: 'rgba(97, 97, 97, 0)',
                border: 'none',
              }}
            >
              CONTACT ME
            </a>
          </div>
        </>
      )}
    </div>
  );
}
