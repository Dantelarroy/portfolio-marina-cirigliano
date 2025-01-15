'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Proyectos() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    const proyectos = [
        {
            id: 1,
            title: 'A new beginning 🌹',
            images: [
                '/images/chica_1.jpeg',
                '/images/chica_2.jpeg',
                '/images/chica_3.jpeg',
            ],
        },
        {
            id: 2,
            title: 'Just "wow"',
            images: [
                '/images/image00014.jpeg',
                '/images/wow_1.jpeg',
                '/images/wow_2.jpeg',
            ],
        },
        {
            id: 3,
            title: 'Another session',
            images: [
                'images/image00008.jpeg',
                '/images/wow_1.jpeg',
                '/images/wow_2.jpeg',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12">
            {/* Imagen Principal de la sección */}
            <div
                className="relative w-full h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(/images/proyectos.jpg)` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
                    {/* Barra de navegación alineada a la izquierda y título alineado a la derecha */}
                    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4">
                        <nav className="flex space-x-6">
                            <a href="/" className="text-xl font-bold text-white">Home</a>
                            <a href="/about" className="text-xl font-bold text-white">About Me</a>
                            <a href="/contact" className="text-xl font-bold text-white">Contact</a>
                        </nav>
                        {/* Título alineado a la derecha */}
                        <h1 className="text-xl font-bold text-white">
                            Marina Cirigliano
                        </h1>
                    </div>
                    <p className="masthead-text text-sm absolute bottom-20 text-center">
                        Where fashion meets passion
                    </p>
                    <div className="flex justify-center items-center absolute bottom-8">
                        <a
                            href="#projects"
                            className="text-white text-3xl cursor-pointer animate-bounce"
                        >
                            ↓
                        </a>
                    </div>
                </div>
            </div>

            {/* Sección de Proyectos */}
            <div id="projects" className="max-w-4xl w-full p-6 bg-white">
                {proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className="w-full mb-6 cursor-pointer"
                        data-aos="fade-up"
                        onClick={() => setSelectedProject(proyecto)}
                    >
                        <div className="relative w-full">
                            <img
                                src={proyecto.images[0]}
                                alt={proyecto.title}
                                className="w-full h-auto object-cover"
                            />
                            <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white">
                                {proyecto.title}
                            </h1>
                        </div>
                        <p className="text-gray-600 mb-4">{proyecto.description}</p>
                    </div>
                ))}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-white text-2xl"
                            >
                                &times;
                            </button>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{selectedProject.description}</p>

                            <div className="relative w-full h-auto mb-6">
                                <img
                                    src={selectedProject.images[0]}
                                    alt={`Proyecto ${selectedProject.id} - Imagen Principal`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div className="overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 pb-4">
                                <div className="flex gap-4">
                                    {selectedProject.images.slice(1).map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Proyecto ${selectedProject.id} - Imagen ${index + 2}`}
                                            className="w-auto h-auto rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
